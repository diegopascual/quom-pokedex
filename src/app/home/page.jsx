import usePokemon from "@/features/pokemon/hooks/usePokemon";
import useScreenSize from "@/hooks/useScreenSize";
import { Link } from "@tanstack/react-router";
import { Button } from "flowbite-react";
import { Plus } from "lucide-react";
import { Carosuel, List } from "@/features/pokemon/components";
import { AsyncWrapper } from "@/components";

const MOBILE_LIMIT = 3;
const DESKTOP_LIMIT = 10;

const Home = () => {
  const isMobile = useScreenSize();
  const limit = isMobile ? MOBILE_LIMIT : DESKTOP_LIMIT;
  const { data: pokemon } = usePokemon({ limit });

  return (
    <>
      <Carosuel />
      <section className="my-16">
        <h3 className="text-4xl text-center">Pokemon Essentials</h3>
        <AsyncWrapper
          fallback={<div>Loading...</div>}
          errorFallback={<div>Error</div>}
        >
          <List pokemon={pokemon} />
          <Link to="/pokemon">
            <Button color="alternative">
              <Plus className="w-4 h-4 mr-2" />
              More
            </Button>
          </Link>
        </AsyncWrapper>
      </section>
    </>
  );
};

export default Home;
