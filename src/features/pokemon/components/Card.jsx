import { Link } from "@tanstack/react-router";
import { formatNumberToFourDigits } from "@/utils/helpers";
import { TYPES_COLORS } from "../constants/types-colors";

export const Card = ({ pokemon }) => (
  <Link to={`/pokemon/${pokemon.id}`}>
    <article>
      <div
        style={{
          backgroundColor: TYPES_COLORS[pokemon.type],
        }}
      >
        <img src={pokemon.image_url} alt={pokemon.name} />
      </div>
      <h3>{pokemon.name}</h3>
      <p>#{formatNumberToFourDigits(pokemon.id)}</p>
    </article>
  </Link>
);
