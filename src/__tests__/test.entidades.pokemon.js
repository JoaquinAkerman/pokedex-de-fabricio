/* eslint-disable linebreak-style */
/* eslint-disable no-new-object */

import Pokemon from '../entidades/pokemon.js';
import bulbasaur from '../../cypress/fixtures/bulbasaur.json';

const pokemon = new Pokemon(
  bulbasaur.id,
  bulbasaur.name,
  bulbasaur.sprites.front_default,
  bulbasaur.abilities,
  bulbasaur.types,
  bulbasaur.moves
);
const { id, name } = bulbasaur;

test('testea que se muestre correctamente la informacion del pokemon seleccionado', () => {
  expect(pokemon.id).toBe(1);
  expect(pokemon.nombre).toBe('bulbasaur');
  expect(pokemon.foto).toBe(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  );
  expect(pokemon.habilidades[0].ability.name).toContain('chlorophyll');
  expect(pokemon.habilidades[1].ability.name).toBe('overgrow');
  expect(pokemon.tipos[0].type.name).toBe('poison');
  expect(pokemon.tipos[1].type.name).toBe('grass');
  expect(pokemon.movimientos[0].move.name).toBe('razor-wind');
  expect(
    pokemon.movimientos[0].version_group_details[0].version_group.name
  ).toBe('crystal');
});
