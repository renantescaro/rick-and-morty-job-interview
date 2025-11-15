import { CharacterRepository } from "@/src/domain/repositories/CharacterRepository";

export class GetCharactersUseCase {
  constructor(private repo: CharacterRepository) {}

  async execute(page: number, name?: string) {
    return this.repo.getCharacters(page, name);
  }
}
