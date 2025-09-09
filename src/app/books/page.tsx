import BooksGrid from "@components/BooksGrid";
import Header from "@components/Header";
import type { Result } from "./../../types/books";

interface BooksPageProps {
  searchParams: { search?: string; languages?: string };
}

export default async function Books({ searchParams }: BooksPageProps) {

  const params = await searchParams;

  const searchQuery = params.search || "";

  const languagesQuery = params.languages || "";

  const url = new URL("https://gutendex.com/books");
  if (searchQuery) url.searchParams.set("search", searchQuery);
  if (languagesQuery) url.searchParams.set("languages", languagesQuery);

  const res = await fetch(url.toString(), { cache: "no-store" });
  const data: Result = await res.json();

  console.log(data);

  return (
    <main className="mx-auto my-0 px-4 sm:px-6 lg:px-20 py-4 max-w-[1920px]">   
      <div className="flex flex-col gap-12">
        <Header/>
        <div className="flex justify-center">
          <BooksGrid books={data.results}/>
        </div>
      </div>          
    </main>      
  );
}