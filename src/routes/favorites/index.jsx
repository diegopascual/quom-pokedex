import { createFileRoute } from "@tanstack/react-router";
import Favorites from "@/features/pokemon/favorites/page";

export const Route = createFileRoute("/favorites/")({
  component: Favorites,
});
