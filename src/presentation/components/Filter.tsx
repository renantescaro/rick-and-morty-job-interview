"use client";
import { useState } from "react";

export function Filter({ onFilter }: { onFilter: (name: string) => void }) {
  const [name, setName] = useState("");

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    if (!name.trim()) return;
    onFilter(name.trim());
  };

  return (
    <div
      className="mb-6 flex justify-center items-center gap-1 focus-within:gap-14 transition-all duration-300"
    >
      <input
        value={name}
        data-testid="search-input"
        onChange={(e) => setName(e.target.value)}
        placeholder="Filtrar por nome..."
        className="border border-gray-400 p-3 rounded w-35 sm:w-80 text-lg 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   bg-black text-white transition-all duration-200
                   focus:scale-130"
      />
      <button
        data-testid="search-button"
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded 
                   text-lg font-semibold transition-transform transform 
                   hover:scale-110"
      >
        Buscar
      </button>
    </div>
  );
}
