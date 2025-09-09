"use client";

import EmptyState from "@components/EmptyState";
import BooksList from "@components/BooksList";
import Spinner from "@components/Spinner";
import { useBooks } from "@hooks/useBooks";

export default function BooksGrid() {
  const { data: books, loading, loadingMore, error } = useBooks();

  if (loading) return <Spinner />;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!books || books.length === 0) return <EmptyState />;

  return (
    <div className="flex flex-col gap-6">
      <BooksList books={books} />
      {loadingMore && (
        <div className="flex justify-center py-6">
          <Spinner />
        </div>
      )}
    </div>
  );
}