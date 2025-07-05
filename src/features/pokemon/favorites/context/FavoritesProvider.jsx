import { useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (pokemon) => {
    setFavorites((prev) => {
      if (prev.find((p) => p.id === pokemon.id)) {
        return prev;
      }
      return [...prev, pokemon];
    });
  };

  const removeFromFavorites = (pokemonId) => {
    setFavorites((prev) => prev.filter((p) => p.id !== pokemonId));
  };

  const isFavorite = (pokemonId) => {
    return favorites.some((p) => p.id === pokemonId);
  };

  const toggleFavorite = (pokemon) => {
    if (isFavorite(pokemon.id)) {
      removeFromFavorites(pokemon.id);
    } else {
      addToFavorites(pokemon);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
