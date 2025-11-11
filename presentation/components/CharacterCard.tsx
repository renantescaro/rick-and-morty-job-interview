import Link from "next/link";
import { Character } from "@/domain/entities/Character";

export function CharacterCard({ character }: { character: Character }) {
  return (
    <Link href={`/character/${character.id}`}>
      <div className="border p-3 rounded hover:bg-gray-100">
        <img src={character.image} alt={character.name} className="rounded w-32 h-32" />
        <h2 className="font-bold">{character.name}</h2>
        <p>{character.species} - {character.status}</p>
      </div>
    </Link>
  );
}
