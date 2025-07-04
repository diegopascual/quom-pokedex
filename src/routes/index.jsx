import { createFileRoute } from "@tanstack/react-router";
import Home from "@/app/home/page";

export const Route = createFileRoute("/")({
  component: Home,
});
