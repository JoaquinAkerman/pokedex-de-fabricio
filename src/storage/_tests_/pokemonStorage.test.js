import { cargarPokemon, guardarPokemon, guardarPokemones } from '../pokemon.js';
import bulbasaur from '../../../cypress/fixtures/bulbasaur.json';

test('Prueba llama a cargarPokemon bulbasaur', () => {
  class LocalStorageMock {
    constructor() {
      this.store = {};
    }

    clear() {
      this.store = {};
    }

    getItem(key) {
      return this.store[key] || null;
    }

    setItem(key, value) {
      this.store[key] = String(value);
    }

    removeItem(key) {
      delete this.store[key];
    }
  }

  global.localStorage = new LocalStorageMock();
  localStorage.setItem('pokemon_bulbasaur', JSON.stringify(bulbasaur));
  expect(cargarPokemon('bulbasaur')).toMatchObject(bulbasaur);
});

test('prueba cargarPokemon con id erroneo', () => {
  expect(() => {
    cargarPokemon(null);
  }).toThrow(`Pokemon con id ${null} no encontrado`);
});
test('prueba llamar a cargarPokemon sin id', () =>
  expect(() => {
    cargarPokemon(undefined);
  }).toThrow('Se necesita un identificador para cargar un pokemón'));

test('prueba guardar pokemon con parámetros incorrectos', () => {
  expect(() => {
    guardarPokemon(undefined, '');
  }).toThrow(
    'Se necesita un identificador y un pokemon para guardar en localStorage'
  );
});
test('prueba guardar pokemon con parámetros incorrectos', () => {
  expect(() => {
    guardarPokemones(undefined, '');
  }).toThrow('Se necesita offset, limite y pokemones');
});
