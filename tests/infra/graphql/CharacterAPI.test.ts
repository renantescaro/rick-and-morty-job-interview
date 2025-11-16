import { CharacterAPI } from "@/infra/graphql/CharacterAPI";
import { client } from "@/infra/graphql/client";

jest.mock("@/infra/graphql/client", () => ({
  client: {
    query: jest.fn(),
  },
}));

describe("CharacterAPI", () => {
  const api = new CharacterAPI();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getCharacters", () => {
    it("deve retornar lista de personagens formatada", async () => {
      (client.query as jest.Mock).mockResolvedValue({
        data: {
          characters: {
            info: { count: 2 },
            results: [
              {
                id: "1",
                name: "Rick Sanchez",
                status: "Alive",
                species: "Human",
                type: "",
                gender: "Male",
                image: "img1",
                origin: { name: "Earth" },
                location: { name: "Earth" },
              },
              {
                id: "2",
                name: "Morty Smith",
                status: "Alive",
                species: "Human",
                type: "",
                gender: "Male",
                image: "img2",
                origin: { name: "Earth" },
                location: { name: "Earth" },
              },
            ],
          },
        },
      });

      const result = await api.getCharacters(1, "Rick");

      expect(result.results.length).toBe(2);
      expect(result.total).toBe(2);

      expect(result.results[0].name).toBe("Rick Sanchez");
      expect(client.query).toHaveBeenCalledTimes(1);
    });

    it("deve retornar array vazio quando API não retornar characters", async () => {
      (client.query as jest.Mock).mockResolvedValue({
        data: {
          characters: null,
        },
      });

      const result = await api.getCharacters(1);

      expect(result.results).toEqual([]);
      expect(result.total).toBe(0);
    });
  });

  describe("getCharacterById", () => {
    it("deve retornar personagem formatado", async () => {
      (client.query as jest.Mock).mockResolvedValue({
        data: {
          character: {
            id: "1",
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Male",
            image: "img1",
            origin: { name: "Earth" },
            location: { name: "Earth", type: "Planet", dimension: "C-137" },
          },
        },
      });

      const result = await api.getCharacterById("1");

      expect(result.id).toBe("1");
      expect(result.name).toBe("Rick Sanchez");
      expect(result.location.type).toBe("Planet");
      expect(client.query).toHaveBeenCalledTimes(1);
    });

    it("deve lançar erro quando personagem não existir", async () => {
      (client.query as jest.Mock).mockResolvedValue({
        data: { character: null },
      });

      await expect(api.getCharacterById("999")).rejects.toThrow(
        "Personagem não encontrado"
      );
    });
  });
});
