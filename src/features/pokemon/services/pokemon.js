import { getPokemon as getPokemonApi, getPokemonSpecie } from "../api/pokemon";
import { getPokemonDetails } from "../utils/helpers";

export const getPokemon = async ({ id, name }) => {
  const pokemon = await getPokemonApi({ id, name });
  const pokemonSpecie = await getPokemonSpecie(pokemon.species);

  const pokemonDetails = getPokemonDetails(pokemon, pokemonSpecie);
  return pokemonDetails;
};

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

  return pokemonResults;
};
