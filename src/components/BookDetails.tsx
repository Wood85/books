import Image from "next/image";
import type { BookData } from "./../types/books";

interface Props {
  book: BookData;
}

export default function BookDetails({ book }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-opacity">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-1/3 aspect-[2/3] overflow-hidden rounded">
          <Image src={book.imageSrc} alt={book.title} width={200} height={300} priority className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{book.title}</h1>
          <p className="text-gray-600">
            Авторы: {book.authors.join(" / ")}
          </p>
          <p className="text-gray-500">Скачано: {book.download_count}</p>
          {book.subjects.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {book.subjects.map((s) => (
                <span key={s} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}