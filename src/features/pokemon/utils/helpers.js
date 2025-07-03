import { capitalize } from "@/utils/helpers";

export const getPokemonDetails = (pokemon, pokemonSpecie) => {
  const { id, name, sprites } = pokemon;

  // Get the image URLs from the sprites
  const image_url = sprites["other"]["official-artwork"]["front_default"];
  const bgRef_url = sprites["other"]["official-artwork"]["front_shiny"];

  // Get the English description from the species data
  const { flavor_text_entries } = pokemonSpecie;
  const description = flavor_text_entries
    .find((entry) => entry.language.name === "en")
    .flavor_text.replace(/\f/g, " ")
    .replace(/\n/g, " ");

  return { id, name: capitalize(name), description, image_url, bgRef_url };
};
