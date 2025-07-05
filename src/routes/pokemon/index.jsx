import { createFileRoute } from "@tanstack/react-router";
import Pokemon from "@/features/pokemon/page";

export const Route = createFileRoute("/pokemon/")({
  component: Pokemon,
});
