import { SearchContext } from "@/hooks/CreateContextMateri";
import { SearchProps } from "@/Types/Search";
import React, { useContext, useId } from "react";
import { FaSearch } from "react-icons/fa";

const SearchForm = ({ name }: SearchProps) => {
  const id = useId();
  const { keyword, setKeyword } = useContext(SearchContext);
  return (
    <div className="flex justify-between items-center relative">
      <input
        type="text"
        placeholder="search..."
        name={name}
        id={id}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="border rounded-full px-4 py-2 w-[616px] placeholder:font-montserrat placeholder:text-[26px] placeholder:font-regular placeholder:text-black"
      />
      <label htmlFor={id} className="absolute right-3">
        <FaSearch className="h-5 w-5 text-black pointer-events-none cursor-pointer" />
      </label>
    </div>
  );
};

export default SearchForm;
