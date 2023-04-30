export enum Direction {
  North,
  South,
  East,
  West,
}

export type Sides = readonly [Direction?, Direction?, Direction?, Direction?];
