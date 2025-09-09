"use client";

import BookCard from "./BookCard";
import type { BookData } from "../types/books";

export default function BooksList({ books }: { books: BookData[] }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {books.map((book) => (
        <BookCard key={book.id} data={book} />
      ))}
    </div>
  );
}