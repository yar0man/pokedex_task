import { Pokemon } from "../types/types";

export async function getPokemon(url: string): Promise<Pokemon> {
  const res = await fetch(url);
  const data = await res.json();

  return {
    id: data.id,
    name: data.name,
    sprite: data.sprites.other.dream_world.front_default,
    types: data.types.map(
      (type: { slot: number; type: { type: string; name: string } }) =>
        type.type.name
    ),
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    hp: data.stats[0].base_stat,
    SPAttack: data.stats[3].base_stat,
    SPDefense: data.stats[4].base_stat,
    speed: data.stats[5].base_stat,
    weight: data.weight,
    totalMoves: data.moves.length,
  };
}

export async function getPokemonPage(limit: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await res.json();

  data.results = await Promise.all(
    data.results.map((result: { name: string; url: string }) => {
      return getPokemon(result.url);
    })
  );

  return data;
}