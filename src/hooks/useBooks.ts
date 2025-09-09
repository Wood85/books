"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import type { Result, BookData } from "../types/books";

interface UseBooksResult {
  data: BookData[];
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
}

export function useBooks(): UseBooksResult {
  const searchParams = useSearchParams();
  const [data, setData] = useState<BookData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);

  const transformBooks = (books: Result["results"]): BookData[] =>
    books.map((book) => ({
      id: book.id,
      title: book.title,
      download_count: book.download_count,
      subjects: book.subjects,
      imageSrc: book.formats["image/jpeg"],
      authors: book.authors.map((a) => a.name),
    }));

  const fetchBooks = useCallback(
    async (url: string, replace = false) => {
      try {
        if (replace) setLoading(true);
        else setLoadingMore(true);

        setError(null);

        const res = await fetch(url);
        if (!res.ok) throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);

        const json: Result = await res.json();
        const transformed = transformBooks(json.results);

        setData((prev) => (replace ? transformed : [...prev, ...transformed]));
        setNextPageUrl(json.next || null);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("Произошла неизвестная ошибка");
      } finally {
        if (replace) setLoading(false);
        else setLoadingMore(false);
      }
    },
    []
  );

  useEffect(() => {
    const searchQuery = searchParams.get("search") || "";
    const languages = searchParams.get("languages") || "";

    const url = new URL("https://gutendex.com/books");
    if (searchQuery) url.searchParams.set("search", searchQuery);
    if (languages) url.searchParams.set("languages", languages);

    fetchBooks(url.toString(), true);
  }, [searchParams, fetchBooks]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        nextPageUrl &&
        !loadingMore &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500
      ) {
        fetchBooks(nextPageUrl);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextPageUrl, loadingMore, fetchBooks]);

  return { data, loading, loadingMore, error };
}