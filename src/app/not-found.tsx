"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-5xl font-bold text-white mb-4">404</h1>
      <p className="text-lg text-white mb-6">Страница не найдена</p>
      <Link
        href="/books"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Вернуться на страницу книг
      </Link>
    </div>
  );
}