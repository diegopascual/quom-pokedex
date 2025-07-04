import { Card } from "./Card";

export const List = ({ pokemon }) => (
  <div>
    {pokemon.map((p) => (
      <Card key={p.id} pokemon={p} />
    ))}
  </div>
);
