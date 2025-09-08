import BookCard from "./BookCard";

interface Book {
  id: number;
  title: string;
  authors: string[];
  formats: {
    [mimeType: string]: string;
  };
  download_count: number;
  viewed?: boolean;
}

interface BooksGridProps {
  books: Book[];
}

export default function BookGrid({ books }: BooksGridProps) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-2xl lg:max-w-7xl">
      {books.map((book) => (
        <BookCard key={book.id} {...book} />
      ))}
    </div>
  );
}