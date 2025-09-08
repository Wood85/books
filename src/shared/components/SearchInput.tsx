"use client";

export default function SearchInput() {
  return (
    <form method="get" className="flex gap-2 w-full max-w-md h-10">
      <input
        type="text"
        name="search"
        placeholder="Поиск по словам..."
        className="flex-1 px-4 py-2 border border-white rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Найти
      </button>
    </form>
  );
}