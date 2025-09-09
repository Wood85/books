"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Result, BookData } from "../types/books";

interface UseBooksResult {
  data: BookData[] | null;
  loading: boolean;
  error: string | null;
}

export function useBooks(): UseBooksResult {
  const searchParams = useSearchParams();
  const [data, setData] = useState<BookData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const searchQuery = searchParams.get("search") || "";
        const languages = searchParams.get("languages") || "";

        const url = new URL("https://gutendex.com/books");
        if (searchQuery) url.searchParams.set("search", searchQuery);
        if (languages) url.searchParams.set("languages", languages);

        const res = await fetch(url.toString());

        if (!res.ok) {
          throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);
        }

        const json: Result = await res.json();

        const transformed: BookData[] = json.results.map((book) => ({
          id: book.id,
          title: book.title,
          download_count: book.download_count,
          subjects: book.subjects,
          imageSrc: book.formats["image/jpeg"],
          authors: book.authors.map((a) => a.name),
        }));

        setData(transformed);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Произошла неизвестная ошибка");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchParams]);

  return { data, loading, error };
}