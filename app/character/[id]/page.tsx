import { CharacterAPI } from "@/infra/graphql/CharacterAPI";
import { CharacterInfo } from "@/presentation/components/CharacterInfo";

export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const repo = new CharacterAPI();
  const character = await repo.getCharacterById(id);

  return (
    <CharacterInfo character={character}/>
  );
}
