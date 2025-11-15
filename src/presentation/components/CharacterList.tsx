"use client";

import { CharacterCard } from "./CharacterCard";
import { Character } from "src/domain/entities/Character";
import { Pagination } from "./Pagination";


interface CharacterListProps {
  characters: Character[];
  page: number;
  total: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export function CharacterList({
  characters,
  page,
  total,
  onNextPage,
  onPrevPage,
}: CharacterListProps) {
  return (
    <div className="p-3">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          gap-4
        "
      >
        {characters.map((c) => (
          <CharacterCard key={c.id} character={c} />
        ))}
      </div>

      <Pagination
        page={page}
        total={total}
        pageSize={characters.length}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />
    </div>
  );
}
