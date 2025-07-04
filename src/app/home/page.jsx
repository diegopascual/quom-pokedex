import usePokemon from "@/features/pokemon/hooks/usePokemon";
import useScreenSize from "@/hooks/useScreenSize";
import { Carosuel, List } from "@/features/pokemon/components";

const MOBILE_LIMIT = 3;
const DESKTOP_LIMIT = 10;

const Home = () => {
  const isMobile = useScreenSize();
  const limit = isMobile ? MOBILE_LIMIT : DESKTOP_LIMIT;
  const { data: pokemon } = usePokemon({ limit });

  return (
    <>
      <Carosuel />
      <section>
        <h3>Pokemon Essentials</h3>
        <List pokemon={pokemon} />
      </section>
      <section>
        <h3>Games Essentials</h3>
      </section>
    </>
  );
};

export default Home;
