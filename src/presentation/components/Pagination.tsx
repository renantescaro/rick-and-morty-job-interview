"use client";

interface PaginationProps {
  page: number;
  total: number;
  pageSize: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export function Pagination({
  page,
  total,
  pageSize,
  onNextPage,
  onPrevPage,
}: PaginationProps) {
  const totalPages = Math.ceil(total / (pageSize || 1));

  return (
    <div className="flex justify-center mt-6 gap-6 items-center">
      {page > 1 && (
        <button
          onClick={onPrevPage}
          className="px-4 py-2 rounded transition-transform transform hover:scale-150"
        >
          <img
            src="/icons/portalgun_previous.png"
            alt="Anterior"
            className="inline w-10 h-10 transition-transform duration-300 hover:scale-150"
          />
        </button>
      )}

      <span className="text-lg text-gray-200 font-semibold">
        Página {page} de {totalPages || 1}
      </span>

      {page < totalPages && (
        <button
          onClick={onNextPage}
          className="px-4 py-2 rounded transition-transform transform hover:scale-150"
        >
          <img
            src="/icons/portalgun_next.png"
            alt="Próxima"
            className="inline w-10 h-10 transition-transform duration-300 hover:scale-150"
          />
        </button>
      )}
    </div>
  );
}
