import axios from "@/api/config";

export const getPokemonList = async (limit = 20, offset = 0) => {
  const response = await axios.get("/pokemon", {
    params: {
      limit,
      offset,
    },
  });

  return response.data;
};

export const getPokemon = async ({ id, name }) => {
  const response = await axios.get(`/pokemon/${id || name}`);
  return response.data;
};

export const getPokemonSpecie = async ({ id, name }) => {
  const response = await axios.get(`/pokemon-species/${id || name}`);
  return response.data;
};
