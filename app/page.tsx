"use client";
import { useEffect, useState } from "react";
import { CharacterAPI } from "@/infra/graphql/CharacterAPI";
import { Filter } from "@/presentation/components/Filter";
import { CharacterList } from "@/presentation/components/CharacterList";

export default function HomePage() {
  const repo = new CharacterAPI();
  const [characters, setCharacters] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [total, setTotal] = useState(0);

  const loadCharacters = async () => {
    const { results, total } = await repo.getCharacters(page, filter);
    setCharacters(results);
    setTotal(total);
  };

  useEffect(() => {
    loadCharacters();
  }, [page, filter]);

  const handleNext = () => setPage((p) => p + 1);
  const handlePrev = () => setPage((p) => Math.max(p - 1, 1));

  return (
    <main className="p-6">
      <div className="flex justify-center mb-6">
        <Filter onFilter={setFilter} />
      </div>

      <CharacterList
        characters={characters}
        page={page}
        total={total}
        onNextPage={handleNext}
        onPrevPage={handlePrev}
      />
    </main>
  );
}
