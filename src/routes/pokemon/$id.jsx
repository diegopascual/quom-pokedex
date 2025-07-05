import { createFileRoute } from "@tanstack/react-router";
import { Details } from "@/features/pokemon/components";

export const Route = createFileRoute("/pokemon/$id")({
  component: Details,
});
