import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      placeholder="Search users..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-2 border rounded mb-3"
    />
  );
};

export default SearchBar;