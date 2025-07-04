import usePokemon from "@/features/pokemon/hooks/usePokemon";
import useScreenSize from "@/hooks/useScreenSize";
import { Carosuel } from "@/features/pokemon/components/Carousel";
import { List } from "@/features/pokemon/components/List";

const MOBILE_LIMIT = 3;
const DESKTOP_LIMIT = 10;

const Home = () => {
  const isMobile = useScreenSize();
  const limit = isMobile ? MOBILE_LIMIT : DESKTOP_LIMIT;
  const { data: pokemon } = usePokemon({ limit });

  return (
    <>
      <Carosuel />
      <h3>Pokemon Essentials</h3>
      <List pokemon={pokemon}/>
      <h3>Games Essentials</h3>
    </>
  );
};

export default Home;
