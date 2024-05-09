import { ChangeEvent, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");

  const debouncedSearch = useDebouncedCallback((value: string) => {
    onSearch(value);
  }, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleChange}
      className="w-full rounded-md border border-black p-5"
    />
  );
};

export default SearchBar;
