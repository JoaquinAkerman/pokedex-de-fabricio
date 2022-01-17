/* eslint-disable linebreak-style */
/* eslint-disable no-new-object */

import Pokemon from '../entidades/pokemon.js';
import bulbasaur from '../../cypress/fixtures/bulbasaur.json';
import Movimiento from '../entidades/movimiento.js';

const pokemon = new Pokemon(
  bulbasaur.id,
  bulbasaur.name,
  bulbasaur.sprites.front_default,
  bulbasaur.abilities,
  bulbasaur.types,
  bulbasaur.moves
);

const { id, nombre, foto, habilidades, tipos, movimientos } = pokemon;

const movimientosDePokemon = new Movimiento(
  movimientos[0].move.name,
  movimientos[0].version_group_details[0].version_group.name
);

test('testea que se muestre correctamente la informacion del pokemon seleccionado', () => {
  expect(id).toBe(1);
  expect(nombre).toBe('bulbasaur');
  expect(foto).toBe(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  );
  expect(habilidades[0].ability.name).toContain('chlorophyll');
  expect(habilidades[1].ability.name).toBe('overgrow');
  expect(tipos[0].type.name).toBe('poison');
  expect(tipos[1].type.name).toBe('grass');
  expect(movimientos[0].move.name).toBe('razor-wind');
  expect(movimientos[0].version_group_details[0].version_group.name).toBe(
    'crystal'
  );
});

test('comprueba que movimientos reciba la información correctamente', () => {
  expect(movimientosDePokemon.nombre).toBe('razor-wind');
  expect(movimientosDePokemon.versiones).toBe('crystal');
});
