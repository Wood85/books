"use client";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-gray-400">
      <p className="text-lg">Книги не найдены</p>
      <p className="text-sm">Попробуйте изменить параметры поиска</p>
    </div>
  );
}