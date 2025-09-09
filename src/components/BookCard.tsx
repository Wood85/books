import type { Book } from "./../types/books";
import Image from "next/image";

interface BookCardProps {
  data: Book;
  viewed?: boolean;
}

export default function BookCard({
  data,
  viewed = false,
}: BookCardProps) {
  return (
    <div 
      className={`bg-white shadow-md rounded-[10px] p-4 flex flex-col items-center transition-opacity ${
        viewed ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="max-w-[200px] aspect-[2/3] w-full rounded-[10px] overflow-hidden">
        <Image src={data.formats["image/jpeg"]} alt={data.title} width={200} height={300} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">{data.title}</h3>
      <p className="text-sm text-gray-600 mb-2 text-center">{data.authors.join(" / ")}</p>
      <p className="text-sm text-gray-500">Downloads: {data.download_count}</p>
    </div>
  );
}