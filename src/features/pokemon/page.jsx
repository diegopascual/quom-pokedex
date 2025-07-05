import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import usePokemon from "./hooks/usePokemon";
import useSinglePokemon from "./hooks/useSinglePokemon";
import useScreenSize from "@/hooks/useScreenSize";
import { getAllPokemonNames } from "./services/pokemon";
import { List, SearchBar } from "@/features/pokemon/components";
import { Pagination, Spinner } from "flowbite-react";
import { AsyncWrapper } from "@/components";

const MOBILE_LIMIT = 5;
const DESKTOP_LIMIT = 20;

const Pokemon = () => {
  const isMobile = useScreenSize();
  const limit = isMobile ? MOBILE_LIMIT : DESKTOP_LIMIT;

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: pokemon } = usePokemon({ page, limit });

  const {
    data: singlePokemon,
    isPending,
    isError,
  } = useSinglePokemon({ searchTerm });

  const { data: pokemonNames } = useSuspenseQuery({
    queryKey: ["pokemonNames"],
    queryFn: getAllPokemonNames,
  });

  const totalPages = Math.ceil(pokemonNames.length / limit) || 1;
  const onPageChange = (page) => setPage(page);
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const isSearching = searchTerm && searchTerm.trim().length > 0 && isPending;

  return (
    <AsyncWrapper
      fallback={<div>Loading...</div>}
      errorFallback={<div>Error</div>}
    >
      <div className="my-12">
        <SearchBar onSearch={handleSearch} />

        {isSearching && (
          <div className="flex justify-center items-center">
            <div className="text-center">
              <Spinner
                color="info"
                size="xl"
                aria-label="Searching pokemon..."
              />
              <p className="mt-4 text-primary">Searching pokemon...</p>
            </div>
          </div>
        )}

        {isError && (
          <div className="flex justify-center items-center">
            <div className="text-center">
              <p className="text-red-500 text-lg font-semibold">
                Pokemon not found
              </p>
            </div>
          </div>
        )}

        {!isSearching && (
          <List pokemon={singlePokemon ? [singlePokemon] : pokemon} />
        )}

        {!singlePokemon && !isSearching && (
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={onPageChange}
              showIcons
            />
          </div>
        )}
      </div>
    </AsyncWrapper>
  );
};

export default Pokemon;
