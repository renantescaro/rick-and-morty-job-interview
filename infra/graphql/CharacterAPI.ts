import { gql } from "@apollo/client";
import { client } from "./client";
import { CharacterRepository } from "@/domain/repositories/CharacterRepository";
import { Character } from "@/domain/entities/Character";

export class CharacterAPI implements CharacterRepository {
  async getCharacters(page: number, name?: string): Promise<{ results: Character[]; total: number }> {
    const { data } = await client.query({
      query: gql`
        query ($page: Int, $name: String) {
          characters(page: $page, filter: { name: $name }) {
            info { count }
            results {
              id name status species gender image origin { name } location { name }
            }
          }
        }
      `,
      variables: { page, name },
    });

    return {
      results: data.characters.results,
      total: data.characters.info.count,
    };
  }

  async getCharacterById(id: string): Promise<Character> {
    const { data } = await client.query({
      query: gql`
        query ($id: ID!) {
          character(id: $id) {
            id name status species gender image origin { name } location { name } type
          }
        }
      `,
      variables: { id },
    });

    return data.character;
  }
}
