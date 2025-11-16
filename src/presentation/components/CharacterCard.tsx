import Link from "next/link";
import { Character } from "@/domain/entities/Character";

export function CharacterCard({ character }: { character: Character }) {
  return (
    <Link href={`/character/${character.id}`}>
      <div
        className="
          bg-black border border-gray-700 p-3 rounded-xl
          flex flex-col items-center text-center
          shadow-md text-white
          transition-transform duration-300 ease-out
          hover:scale-150 hover:z-10 hover:shadow-2xl
        "
      >
        <img
          src={character.image}
          alt={character.name}
          className="rounded-md w-24 h-24 object-cover mb-2"
        />
        <h2 className="font-semibold text-sm truncate w-50">{character.name}</h2>
        <p className="text-xs text-gray-400">
          {character.species} - {character.status}
        </p>
      </div>
    </Link>
  );
}
