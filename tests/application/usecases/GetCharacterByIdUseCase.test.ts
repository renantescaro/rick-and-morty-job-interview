import { GetCharacterByIdUseCase } from "@/application/usecases/GetCharacterByIdUseCase";
import { CharacterRepository } from "@/domain/repositories/CharacterRepository";

describe("GetCharacterByIdUseCase", () => {
  const mockRepo: jest.Mocked<CharacterRepository> = {
    getCharacters: jest.fn(),
    getCharacterById: jest.fn(),
  };

  const usecase = new GetCharacterByIdUseCase(mockRepo);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve retornar o personagem vindo do repositório", async () => {
    const mockCharacter = {
      id: "1",
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      image: "img",
      origin: { name: "Earth" },
      location: { name: "Earth" },
    };

    mockRepo.getCharacterById.mockResolvedValue(mockCharacter);

    const result = await usecase.execute("1");

    expect(result).toEqual(mockCharacter);
    expect(mockRepo.getCharacterById).toHaveBeenCalledTimes(1);
    expect(mockRepo.getCharacterById).toHaveBeenCalledWith("1");
  });

  it("deve repassar erros do repositório", async () => {
    mockRepo.getCharacterById.mockRejectedValue(new Error("Personagem não encontrado"));

    await expect(usecase.execute("999")).rejects.toThrow("Personagem não encontrado");
  });
});
