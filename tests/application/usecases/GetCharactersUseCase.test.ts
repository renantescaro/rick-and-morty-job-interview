import { GetCharactersUseCase } from "@/application/usecases/GetCharactersUseCase";
import { CharacterRepository } from "@/domain/repositories/CharacterRepository";

describe("GetCharactersUseCase", () => {
  let mockRepo: jest.Mocked<CharacterRepository>;
  let useCase: GetCharactersUseCase;

  beforeEach(() => {
    mockRepo = {
      getCharacters: jest.fn(),
      getCharacterById: jest.fn(),
    };

    useCase = new GetCharactersUseCase(mockRepo);
  });

  it("deve chamar o método do repositório com os parâmetros corretos", async () => {
    const mockResult = {
      results: [{
        id: "1",
        name: "Rick",
        status: "Alive",
        species: "todo",
        type: "todo",
        gender: "todo",
        image: "todo",
        origin: {name:"todo"},
        location: {name:"todo"},
    }],
      total: 1,
    };

    mockRepo.getCharacters.mockResolvedValue(mockResult);

    const result = await useCase.execute(1, "Rick");

    expect(mockRepo.getCharacters).toHaveBeenCalledWith(1, "Rick");
    expect(result).toEqual(mockResult);
  });

  it("deve funcionar mesmo sem filtro de nome", async () => {
    const mockResult = { results: [], total: 0 };
    mockRepo.getCharacters.mockResolvedValue(mockResult);

    const result = await useCase.execute(2);

    expect(mockRepo.getCharacters).toHaveBeenCalledWith(2, undefined);
    expect(result).toEqual(mockResult);
  });
});
