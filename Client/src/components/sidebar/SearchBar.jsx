import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      placeholder="Search users..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full px-4 py-2 mb-4 rounded-chat border border-gray-300 dark:border-slate-600 
      bg-transparent text-chat-text-main-light dark:text-chat-text-main-dark
      focus:outline-none focus:ring-2 focus:ring-brand-primary"
    />
  );
};

export default SearchBar;