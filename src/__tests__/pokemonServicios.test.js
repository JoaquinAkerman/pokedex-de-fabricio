import { cargarPokemon } from '../servicios/pokemon.js';
import bulbasaur from '../../cypress/fixtures/bulbasaur.json';

test('cargarPokemon con undefined da error', () => {
  expect(cargarPokemon(undefined)).rejects.toEqual(
    new Error('Se necesita un identificador para cargar un pokemón')
  );
});
