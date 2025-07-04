import { Card } from "./Card";

export const List = ({ pokemon }) => (
  <div className="grid justify-items-center gap-5 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {pokemon.map((p) => (
      <Card key={p.id} pokemon={p} />
    ))}
  </div>
);
