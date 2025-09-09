"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("search") ?? "");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("search", value.trim());
    } else {
      params.delete("search");
    }

    router.push(`/books?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col gap-2 w-full max-w-md sm:flex-row sm:h-10">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск по словам..."
        className="flex-1 px-4 py-2 border border-white rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-transparent"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition self-end sm:self-auto"
      >
        Найти
      </button>
    </form>
  );
}