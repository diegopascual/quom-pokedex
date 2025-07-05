import { Link } from "@tanstack/react-router";
import { Card as CardFlowbite } from "flowbite-react";
import { formatNumberToFourDigits } from "@/utils/helpers";
import { TYPES_COLORS } from "../constants/types-colors";

export const Card = ({ pokemon }) => (
  <Link to={`/pokemon/${pokemon.id}`} className="max-w-xs">
    <CardFlowbite className="hover:bg-gray-100 dark:hover:bg-gray-700">
      <div className={`${TYPES_COLORS[pokemon.type]} rounded-2xl`}>
        <img src={pokemon.image_url} alt={pokemon.name} />
      </div>
      <p className="text-2xl font-bold">{pokemon.name}</p>
      <p className="text-lg">#{formatNumberToFourDigits(pokemon.id)}</p>
    </CardFlowbite>
  </Link>
);
