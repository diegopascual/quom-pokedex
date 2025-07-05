import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "@/features/pokemon/services/pokemon";

const useSinglePokemon = ({ searchTerm }) =>
  useQuery({
    queryKey: ["single-pokemon", searchTerm],
    queryFn: () => getPokemon({ name: searchTerm.toLowerCase() }),
    enabled: !!searchTerm,
    // placeholderData: null,
  });

export default useSinglePokemon;
