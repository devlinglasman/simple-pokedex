//@format

import GLOBALS from './globals.js';

it('removes first part of path', () => {
  expect(GLOBALS.removeFirstPathPart('/type/blah')).toEqual('blah');
  expect(GLOBALS.removeFirstPathPart('/pokemon/blah')).toEqual('blah');
});
