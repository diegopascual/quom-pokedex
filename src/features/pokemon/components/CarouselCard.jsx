import { Link } from "@tanstack/react-router";
import { formatNumberToFourDigits, getContrastColor } from "@/utils/helpers";
import { TYPES_COLORS } from "../constants/types-colors";

export const CarosuelCard = ({ pokemon }) => (
  <article
    style={{
      color: getContrastColor(TYPES_COLORS[pokemon.type]),
      backgroundColor: TYPES_COLORS[pokemon.type],
    }}
  >
    <img src={pokemon.image_url} alt={pokemon.name} />
    <p>#{formatNumberToFourDigits(pokemon.id)}</p>
    <h3>{pokemon.name}</h3>
    <p>{pokemon.description}</p>
    <Link to={`/pokemon/${pokemon.id}`}>Show more</Link>
  </article>
);
