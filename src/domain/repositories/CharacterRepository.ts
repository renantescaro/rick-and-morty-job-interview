import { Character } from "../entities/Character";

export interface CharacterRepository {
  getCharacters(page: number, name?: string): Promise<{ results: Character[]; total: number }>;
  getCharacterById(id: string): Promise<Character>;
}
