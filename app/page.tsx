"use client";
import { useEffect, useState } from "react";
import { CharacterAPI } from "@/infra/graphql/CharacterAPI";
import { CharacterCard } from "@/presentation/components/CharacterCard";
import { Filter } from "@/presentation/components/Filter";

export default function HomePage() {
  const repo = new CharacterAPI();
  const [characters, setCharacters] = useState([]);
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

  return (
    <main className="p-6">
      <Filter onFilter={setFilter} />
      <div className="grid grid-cols-4 gap-4">
        {characters.map((c: any) => (
          <CharacterCard key={c.id} character={c} />
        ))}
      </div>
      <div className="flex justify-center mt-6 gap-3">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Anterior</button>
        <span>Página {page}</span>
        <button onClick={() => setPage(page + 1)}>Próxima</button>
      </div>
    </main>
  );
}
