import { CharacterAPI } from "@/infra/graphql/CharacterAPI";

export default async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const repo = new CharacterAPI();
  const character = await repo.getCharacterById(id);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{character.name}</h1>
      <img src={character.image} alt={character.name} className="rounded-lg my-4" />
      <p>Status: {character.status}</p>
      <p>Espécie: {character.species}</p>
      <p>Gênero: {character.gender}</p>
      <p>Origem: {character.origin.name}</p>
      <p>Local atual: {character.location.name}</p>
    </main>
  );
}
