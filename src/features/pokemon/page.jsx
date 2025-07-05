import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import usePokemon from "@/features/pokemon/hooks/usePokemon";
import useScreenSize from "@/hooks/useScreenSize";
import { getAllPokemonNames } from "./services/pokemon";
import { List, SearchBar } from "@/features/pokemon/components";
import { Pagination } from "flowbite-react";
import { AsyncWrapper } from "@/components";

const MOBILE_LIMIT = 5;
const DESKTOP_LIMIT = 20;

const Pokemon = () => {
  const isMobile = useScreenSize();
  const limit = isMobile ? MOBILE_LIMIT : DESKTOP_LIMIT;

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: pokemon } = usePokemon({ page, limit });
  const { data: pokemonNames } = useSuspenseQuery({
    queryKey: ["pokemonNames"],
    queryFn: getAllPokemonNames,
  });

  const totalPages = Math.ceil(pokemonNames.length / limit) || 1;
  const onPageChange = (page) => setPage(page);
  const handleSearch = (term) => {
    setSearchTerm(term);
    // setPage(1); // Reset to first page when searching
  };

  return (
    <AsyncWrapper
      fallback={<div>Loading...</div>}
      errorFallback={<div>Error</div>}
    >
      <div className="my-6">
        <SearchBar onSearch={handleSearch} placeholder="Search" />
      </div>
      <List pokemon={pokemon} />
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </AsyncWrapper>
  );
};

export default Pokemon;
