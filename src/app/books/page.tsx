import BooksGrid from "@components/BooksGrid";
import Header from "@components/Header";

export default async function Books() {
  return (
    <main className="mx-auto my-0 px-4 sm:px-6 lg:px-20 py-4 max-w-[1920px]">   
      <div className="flex flex-col gap-12">
        <Header/>
        <div className="flex justify-center max-w-md sm:max-w-3xl lg:max-w-7xl mx-auto">
          <BooksGrid/>
        </div>
      </div>          
    </main>      
  );
}