"use client";
import { useState } from "react";

export function Filter({ onFilter }: { onFilter: (name: string) => void }) {
  const [name, setName] = useState("");
  return (
    <div className="mb-4 flex gap-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Filtrar por nome..."
        className="border p-2 rounded"
      />
      <button onClick={() => onFilter(name)} className="bg-blue-500 text-white px-4 rounded">
        Buscar
      </button>
    </div>
  );
}
