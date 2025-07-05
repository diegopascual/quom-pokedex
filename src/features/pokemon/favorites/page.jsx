import { useFavorites } from "./context/FavoritesContext";
import { List } from "@/features/pokemon/components";
import { Heart } from "lucide-react";

const Favorites = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 text-center">
        <Heart className="w-16 h-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold mb-2">No tienes favoritos</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Agrega algunos Pokémon a tu lista de favoritos para verlos aquí.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Mis Favoritos</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Tienes {favorites.length} Pokémon en tu lista de favoritos
      </p>
      <List pokemon={favorites} />
    </div>
  );
};

export default Favorites;
