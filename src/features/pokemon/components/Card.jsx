import { Link } from "@tanstack/react-router";
import { Card as CardFlowbite, Button } from "flowbite-react";
import { Heart } from "lucide-react";
import { formatNumberToFourDigits } from "@/utils/helpers";
import { TYPES_COLORS } from "../constants/types-colors";
import { useFavorites } from "../context/FavoritesContext";

export const Card = ({ pokemon }) => {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(pokemon);
  };

  return (
    <div className="max-w-xs relative">
      <Link to={`/pokemon/${pokemon.id}`}>
        <CardFlowbite className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <div className={`${TYPES_COLORS[pokemon.type]} rounded-2xl relative`}>
            <img
              src={pokemon.image_url}
              alt={pokemon.name}
              className="w-full h-auto"
            />
            <Button
              onClick={handleToggleFavorite}
              color="alternative"
              className={`absolute top-2 right-2 p-2 rounded-full ${
                isFavorite(pokemon.id)
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-white/80 hover:bg-white"
              }`}
              size="xs"
            >
              <Heart
                className={`w-4 h-4 ${
                  isFavorite(pokemon.id)
                    ? "fill-white text-white"
                    : "text-gray-600"
                }`}
              />
            </Button>
          </div>
          <div className="p-4">
            <p className="text-2xl font-bold">{pokemon.name}</p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              #{formatNumberToFourDigits(pokemon.id)}
            </p>
          </div>
        </CardFlowbite>
      </Link>
    </div>
  );
};
