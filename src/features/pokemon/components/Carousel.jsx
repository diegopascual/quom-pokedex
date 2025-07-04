import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokemonCarousel } from "../services/pokemon";
import { formatNumberToFourDigits, getContrastColor } from "@/utils/helpers";
import { TYPES_COLORS } from "../constants/types-colors";

export const Carosuel = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["pokemonCarousel"],
    queryFn: getPokemonCarousel,
  });

  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        {data.map((pokemon) => (
          <div
            key={pokemon.id}
            style={{
              color: getContrastColor(TYPES_COLORS[pokemon.type]),
              backgroundColor: TYPES_COLORS[pokemon.type],
            }}
          >
            <img src={pokemon.image_url} alt={pokemon.name} />
            <p>#{formatNumberToFourDigits(pokemon.id)}</p>
            <h3>{pokemon.name}</h3>
            <p>{pokemon.description}</p>
          </div>
        ))}
      </Suspense>
    </ErrorBoundary>
  );
};
