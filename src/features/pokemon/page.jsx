import usePokemon from "@/features/pokemon/hooks/usePokemon";
import useScreenSize from "@/hooks/useScreenSize";
import { List } from "@/features/pokemon/components/List";

const MOBILE_LIMIT = 5;
const DESKTOP_LIMIT = 20;

const Pokemon = () => {
  const isMobile = useScreenSize();
  const limit = isMobile ? MOBILE_LIMIT : DESKTOP_LIMIT;
  const { data: pokemon } = usePokemon({ limit });

  return (
    <>
      <List pokemon={pokemon} />
    </>
  );
};

export default Pokemon;
