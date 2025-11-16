import { CharacterRepository } from "src/domain/repositories/CharacterRepository";

export class GetCharacterByIdUseCase {
  constructor(private repo: CharacterRepository) {}

  async execute(id: string) {
    return this.repo.getCharacterById(id);
  }
}
