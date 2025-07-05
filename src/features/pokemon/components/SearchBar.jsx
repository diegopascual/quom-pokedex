import { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { Search, X } from "lucide-react";

export const SearchBar = ({ onSearch, placeholder = "Search Pokemon..." }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <div className="relative flex-1">
        <TextInput
          id="search"
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          icon={Search}
          className="w-full"
        />
        {searchTerm && (
          <Button
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700"
            size="xs"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      <Button type="submit" disabled={!searchTerm.trim()}>
        Buscar
      </Button>
    </form>
  );
};
