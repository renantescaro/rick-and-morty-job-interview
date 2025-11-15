import { gql } from "@apollo/client";
import { client } from "./client";
import { CharacterRepository } from "@/src/domain/repositories/CharacterRepository";
import { Character } from "@/src/domain/entities/Character";

interface CharactersResponse {
  characters: {
    info: { count: number };
    results: {
      id: string;
      name: string;
      status: string;
      species: string;
      type: string;
      gender: string;
      image: string;
      origin: { name: string };
      location: { name: string };
    }[];
  };
}

interface CharacterByIdResponse {
  character: {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    origin: { name: string };
    location: { name: string; type?: string; dimension?: string };
  };
}

export class CharacterAPI implements CharacterRepository {
  async getCharacters(
    page: number,
    name?: string
  ): Promise<{ results: Character[]; total: number }> {
    const { data } = await client.query<CharactersResponse>({
      query: gql`
        query ($page: Int, $name: String) {
          characters(page: $page, filter: { name: $name }) {
            info { count }
            results {
              id name status species type gender image origin { name } location { name }
            }
          }
        }
      `,
      variables: { page, name },
    });

    if (!data?.characters) {
      return { results: [], total: 0 };
    }

    const results: Character[] = data.characters.results.map((c) => ({
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
    const { data } = await client.query<CharacterByIdResponse>({
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

    if (!data?.character) {
      throw new Error("Personagem não encontrado");
    }

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
