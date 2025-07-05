import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams, Link } from "@tanstack/react-router";
import { getPokemon } from "@/features/pokemon/services/pokemon";
import { useFavorites } from "../favorites/context/FavoritesContext";
import { AsyncWrapper } from "@/components";
import { formatNumberToFourDigits } from "@/utils/helpers";
import { TYPES_COLORS } from "@/features/pokemon/constants/types-colors";
import { Card, Button } from "flowbite-react";
import { Heart, ArrowLeft } from "lucide-react";

const Details = () => {
  const { id } = useParams({ from: "/pokemon/$id" });
  const { isFavorite, toggleFavorite } = useFavorites();

  const { data: pokemon } = useSuspenseQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon({ id }),
  });

  const handleToggleFavorite = () => {
    toggleFavorite(pokemon);
  };

  return (
    <AsyncWrapper
      fallback={<div>Loading...</div>}
      errorFallback={<div>Error</div>}
    >
      <div className="max-w-4xl mx-auto p-4">
        <Link
          to="/pokemon"
          className="inline-flex items-center mb-6 text-gray-400 hover:text-primary"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a la lista
        </Link>

        <Card className="overflow-hidden">
          <div className="md:flex">
            <div
              className={`${TYPES_COLORS[pokemon.type]} p-8 md:w-1/2 flex items-center justify-center`}
            >
              <img
                src={pokemon.image_url}
                alt={pokemon.name}
                className="w-full max-w-sm h-auto"
              />
            </div>

            <div className="p-8 md:w-1/2">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{pokemon.name}</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    #{formatNumberToFourDigits(pokemon.id)}
                  </p>
                </div>

                <Button
                  onClick={handleToggleFavorite}
                  color="alternative"
                  className={`${
                    isFavorite(pokemon.id)
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  size="sm"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite(pokemon.id)
                        ? "fill-white text-white"
                        : "text-gray-600"
                    }`}
                  />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Type</h3>
                  <span
                    className={`${TYPES_COLORS[pokemon.type]} px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {pokemon.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {pokemon.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </AsyncWrapper>
  );
};

export default Details;
