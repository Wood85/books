"use client";

import EmptyState from "@components/EmptyState";
import BooksList from "@components/BooksList";
import Spinner from "@components/Spinner";
import { useBooks } from "@hooks/useBooks";

export default function BooksGrid() {
  const { data: books, loading, error } = useBooks();

  if (loading) return <Spinner />;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!books || books.length === 0) return <EmptyState />;

  return <BooksList books={books} />;
}