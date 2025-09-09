"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { BookData } from "../types/books";

interface Props {
  data: BookData;
}

export default function BookCard({ data }: Props) {
  const router = useRouter();
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    const viewedBooks: number[] = JSON.parse(localStorage.getItem("viewedBooks") || "[]");
    setViewed(viewedBooks.includes(data.id));
  }, [data.id]);

  const handleClick = () => {
    const viewedBooks: number[] = JSON.parse(localStorage.getItem("viewedBooks") || "[]");
    if (!viewedBooks.includes(data.id)) {
      viewedBooks.push(data.id);
      localStorage.setItem("viewedBooks", JSON.stringify(viewedBooks));
    }
    setViewed(true);

    router.push(`/books/${data.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-md rounded-[10px] p-4 flex flex-col items-center transition-opacity cursor-pointer"
    >
      <div className="max-w-[200px] aspect-[2/3] w-full rounded-[10px] overflow-hidden">
        <Image src={data.imageSrc} alt={data.title} width={200} height={300} className="w-full h-full object-cover" 
          style={{ filter: viewed ? "brightness(50%)" : "brightness(100%)" }} />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">{data.title}</h3>
      <p className="text-sm text-gray-600 mb-2 text-center">{data.authors.join(" / ")}</p>
      <p className="text-sm text-gray-500">Скачано: {data.download_count}</p>
    </div>
  );
}