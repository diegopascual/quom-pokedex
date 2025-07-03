import { getPokemon, getPokemonSpecie } from "../api/pokemon";
import { getPokemonDetails } from "../utils/helpers";

// const getPokemonDetails = async (pokemon) => {};

export const getPokemonCarousel = async () => {
  const POKEMON_CAROUSEL_IDS = {
    BULBASAUR: 1,
    CHARMANDER: 4,
    SQUIRTLE: 7,
    PIKACHU: 25,
    CYNDQUIL: 155,
  };

  // Fetch Pokémon details for each ID in the carousel
  const pokemonIds = Object.values(POKEMON_CAROUSEL_IDS);
  const pokemonPromises = pokemonIds.map((id) => getPokemon({ id }));
  const pokemonResults = await Promise.all(pokemonPromises);

  // Fetch Pokémon specie for each Pokémon
  const pokemonSpeciePromises = pokemonResults.map((pokemon) =>
    getPokemonSpecie({ id: pokemon.id })
  );
  const pokemonSpecieResults = await Promise.all(pokemonSpeciePromises);

  const data = pokemonIds.map((id) => {
    const pokemon = pokemonResults.find((p) => p.id === id);
    const pokemonSpecie = pokemonSpecieResults.find(
      (p) => p.name === pokemon.name
    );

    const pokemonDetails = getPokemonDetails(pokemon, pokemonSpecie);
    return pokemonDetails;
  });

  return data;
};
