import CheckboxList from "@components/CheckboxList";
import SearchInput from "@shared/components/SearchInput";

export default function Header() {
  return (
    <header className="flex flex-col gap-6 sm:justify-between sm:gap-12">
      <h1 className="text-2xl font-bold text-white text-center">Books</h1>
      <div className="flex flex-col gap-6 items-end sm:justify-between sm:gap-12 sm:flex-row sm:items-end">
        <CheckboxList/>
        <SearchInput/>
      </div>
    </header>      
  );
}