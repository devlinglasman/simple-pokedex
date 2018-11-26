// @format

import GLOBALS from '../globals.js';

export function spriteURL(pokeNumber) {
  return GLOBALS.SPRITE_URL + pokeNumber + '.png';
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
