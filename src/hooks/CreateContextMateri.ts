import { createContext } from "react";

export const SearchContext = createContext<{
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}>({
  keyword: "",
  setKeyword: () => {},
});
