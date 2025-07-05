import {
  getPokemon as getPokemonApi,
  getPokemonList as getPokemonListApi,
  getPokemonSpecie,
} from "../api/pokemon";
import { getPokemonDetails } from "../utils/helpers";
import { capitalize } from "@/utils/helpers";

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
    UMBREON: 197,
  };

  // Fetch Pokémon details for each ID in the carousel
  const pokemonIds = Object.values(POKEMON_CAROUSEL_IDS);
  const pokemonPromises = pokemonIds.map((id) => getPokemon({ id }));
  const pokemonResults = await Promise.all(pokemonPromises);

  return pokemonResults;
};

export const getPokemonList = async ({ limit, offset }) => {
  const pokemon = await getPokemonListApi({ limit, offset });
  const pokemonPromises = pokemon.results.map((p) => getPokemon(p));
  const pokemonResults = await Promise.all(pokemonPromises);

  return pokemonResults;
};

export const getAllPokemonNames = async () => {
  const pokemon = await getPokemonListApi({ limit: 2000, offset: 0 });
  const pokemonNames = pokemon.results.map((p) => ({
    id: Number(p.url.split("/").slice(-2, -1)[0]),
    name: capitalize(p.name),
  }));

  return pokemonNames;
};
