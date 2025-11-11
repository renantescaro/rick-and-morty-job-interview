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

    const results = data.characters.results.map((c: any) => ({
      id: c.id,
      name: c.name,
      status: c.status,
      species: c.species,
      type: c.type,
      gender: c.gender,
      image: c.image,
      origin: { name: c.origin.name },
      location: { name: c.location.name },
    }));

    return {
      results,
      total: data.characters.info.count,
    };
  }

  async getCharacterById(id: string): Promise<Character> {
    const { data } = await client.query({
      query: gql`
        query ($id: ID!) {
          character(id: $id) {
            id name status species type gender image
            origin {
              name
            }
            location {
              name
              type
              dimension
            }
          }
        }
      `,
      variables: { id },
    });

    const c = data.character;

    return {
      id: c.id,
      name: c.name,
      status: c.status,
      species: c.species,
      type: c.type,
      gender: c.gender,
      image: c.image,
      origin: {
        name: c.origin.name
      },
      location: {
        name: c.location.name,
        type: c.location?.type,
        dimension: c.location?.dimension
      },
    };
  }
}
