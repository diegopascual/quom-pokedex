import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { FavoritesProvider } from "@/features/pokemon/favorites/context/FavoritesProvider";
import { NavBar } from "@/components";

function App() {
  return (
    <FavoritesProvider>
      <div className="max-w-7xl mx-auto">
        <NavBar />
        <main className="p-4 lg:p-0">
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </div>
    </FavoritesProvider>
  );
}

export default App;
