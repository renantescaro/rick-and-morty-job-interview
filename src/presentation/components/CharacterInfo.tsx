import { Character } from "@/domain/entities/Character";

export function CharacterInfo({ character }: { character: Character }) {
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
