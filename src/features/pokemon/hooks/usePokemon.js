import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/features/pokemon/services/pokemon";

const usePokemon = ({ page = 0, limit = 20 }) =>
  useSuspenseQuery({
    queryKey: ["pokemon", page, limit],
    queryFn: () => getPokemonList({ limit, offset: page * limit }),
  });

export default usePokemon;
