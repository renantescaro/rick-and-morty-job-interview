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
    <div className="flex justify-center mt-6 gap-3 items-center">
      <button
        disabled={page === 1}
        onClick={onPrevPage}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Anterior
      </button>

      <span className="text-sm text-gray-700">
        Página {page} de {totalPages || 1}
      </span>

      <button
        disabled={page >= totalPages}
        onClick={onNextPage}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Próxima
      </button>
    </div>
  );
}
