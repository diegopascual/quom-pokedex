import { createFileRoute } from "@tanstack/react-router";
import Details from "@/features/pokemon/details/page";

export const Route = createFileRoute("/pokemon/$id")({
  component: Details,
});
