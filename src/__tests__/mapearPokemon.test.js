import { mapearPokemon } from '../mapeadores/pokemon.js';
import bulbasaur from '../../cypress/fixtures/bulbasaur.json';

test('prueba el mapeador', () => {
  expect(mapearPokemon(bulbasaur)).toMatchObject({
    id: 1,
    nombre: 'bulbasaur',
  });
  expect(mapearPokemon(bulbasaur).habilidades).toEqual(
    expect.arrayContaining(['chlorophyll', 'overgrow'])
  );
  expect(mapearPokemon(bulbasaur).tipos).toEqual(
    expect.arrayContaining(['grass', 'poison'])
  );
});
