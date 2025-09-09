import type { Book, BookData } from "./../../../types/books";
import BookDetails from "@components/BookDetails";

interface BookPageProps {
  params: { id: string };
}

export default async function BookPage({ params }: BookPageProps) {
  const awaitedParams = await params;
  const { id } = awaitedParams;

  const res = await fetch(`https://gutendex.com/books/${id}`, { cache: "no-store" });

  if (!res.ok) {
    return <div className="p-8 text-center">Книга не найдена</div>;
  }

  const book: Book = await res.json();

  const bookData: BookData = {
    id: book.id,
    title: book.title,
    authors: book.authors.map(a => a.name),
    download_count: book.download_count,
    subjects: book.subjects,
    imageSrc: book.formats["image/jpeg"],
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <BookDetails book={bookData} />
    </div>
  );
}