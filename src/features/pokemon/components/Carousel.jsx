import { useSuspenseQuery } from "@tanstack/react-query";
import { getPokemonCarousel } from "../services/pokemon";
import { CarosuelCard } from "./CarouselCard";
import { Carousel } from "flowbite-react";
import { AsyncWrapper } from "@/components";

export const Carosuel = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["pokemonCarousel"],
    queryFn: getPokemonCarousel,
  });

  return (
    <AsyncWrapper
      fallback={<div>Loading...</div>}
      errorFallback={<div>Error</div>}
    >
      <Carousel>
        {data.map((pokemon) => (
          <CarosuelCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Carousel>
    </AsyncWrapper>
  );
};
