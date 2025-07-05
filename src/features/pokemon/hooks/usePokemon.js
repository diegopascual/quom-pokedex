import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/features/pokemon/services/pokemon";

const usePokemon = ({ page = 1, limit = 20 }) =>
  useSuspenseQuery({
    queryKey: ["pokemon", page, limit],
    queryFn: () => getPokemonList({ limit, offset: (page - 1) * limit }),
  });

export default usePokemon;
