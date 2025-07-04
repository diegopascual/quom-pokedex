import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokemonCarousel } from "../services/pokemon";
import { CarosuelCard } from "./CarouselCard";
import { Carousel } from "flowbite-react";

export const Carosuel = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["pokemonCarousel"],
    queryFn: getPokemonCarousel,
  });

  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel>
          {data.map((pokemon) => (
            <CarosuelCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </Carousel>
      </Suspense>
    </ErrorBoundary>
  );
};
