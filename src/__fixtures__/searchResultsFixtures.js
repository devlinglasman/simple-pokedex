// @format

export function spriteURL(pokeNumber) {
  return (
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
    pokeNumber +
    '.png'
  );
}

export const searchResultsFixture = [
  {
    name: 'bulbasaur',
    sprite: spriteURL(1),
  },
  {
    name: 'ivysaur',
    sprite: spriteURL(2),
  },
  {
    name: 'venusaur',
    sprite: spriteURL(3),
  },
];
