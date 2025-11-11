import { CharacterRepository } from "@/domain/repositories/CharacterRepository";

export class GetCharacterByIdUseCase {
  constructor(private repo: CharacterRepository) {}

  async execute(id: string) {
    return this.repo.getCharacterById(id);
  }
}
