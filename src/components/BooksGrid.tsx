import BookCard from "./BookCard";

import type { Book } from "./../types/books";

interface BooksGridProps {
  books: Book[];
}

export default function BookGrid({ books }: BooksGridProps) {

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-2xl lg:max-w-7xl">
      {books.map((book) => (
        <BookCard key={book.id} data={book} />
      ))}
    </div>
  );
}