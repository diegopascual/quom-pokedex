import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { NavBar } from "@/components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  );
}

export default App;
