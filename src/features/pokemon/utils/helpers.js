import { capitalize } from "@/utils/helpers";

export const getPokemonDetails = (pokemon, pokemonSpecie) => {
  const { id, name, sprites, types } = pokemon;

  // Get the image URL from the sprites
  const image_url = sprites["other"]["official-artwork"]["front_default"];

  // Get the English description from the species data
  const { flavor_text_entries } = pokemonSpecie;
  const description = flavor_text_entries
    .find((entry) => entry.language.name === "en")
    .flavor_text.replace(/\f/g, " ")
    .replace(/\n/g, " ");

  const type = types[0].type.name;

  return {
    id,
    name: capitalize(name),
    description,
    type,
    image_url,
  };
};
