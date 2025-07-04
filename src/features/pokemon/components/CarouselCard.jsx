import { Link } from "@tanstack/react-router";
import { formatNumberToFourDigits } from "@/utils/helpers";
import { TYPES_COLORS } from "../constants/types-colors";

export const CarosuelCard = ({ pokemon }) => (
  <article
    className={`${TYPES_COLORS[pokemon.type]} flex flex-col items-center justify-between p-4 pb-13 lg:flex-row lg:max-h-100 lg:justify-evenly`}
  >
    <div className="w-full lg:w-auto">
      <img src={pokemon.image_url} alt={pokemon.name} className="w-2xs" />
    </div>
    <section className="lg:flex flex-col items-center justify-between w-full lg:w-2/3">
      <div className="flex justify-between items-center w-full my-2 lg:flex-col">
        <p className="bg-secondary text-primary p-1 rounded-md">
          #{formatNumberToFourDigits(pokemon.id)}
        </p>
        <p className="font-bold text-lg lg:text-4xl lg:my-5">{pokemon.name}</p>
      </div>
      <p className="my-2">{pokemon.description}</p>
      <Link
        to={`/pokemon/${pokemon.id}`}
        className="flex justify-center items-center bg-secondary text-primary p-3 mt-2 rounded-md border border-secondary hover:border-primary lg:inline-block"
      >
        Show more
      </Link>
    </section>
  </article>
);
