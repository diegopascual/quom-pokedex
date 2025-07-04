import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NavBar } from "@/components";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <main className="p-4 lg:p-0">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  );
}

export default App;
