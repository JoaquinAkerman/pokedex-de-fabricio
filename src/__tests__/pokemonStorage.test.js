import { cargarPokemon } from '../storage/pokemon.js';
import bulbasaur from '../../cypress/fixtures/bulbasaur.json';

const errorIdNoEncontrado = `Pokemon con id ${null} no encontrado`;
const errorIdUndefined = 'Se necesita un identificador para cargar un pokemón';

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
  }).toThrow(errorIdNoEncontrado);
});
test('prueba llamar a cargarPokemon sin id', () =>
  expect(() => {
    cargarPokemon(undefined);
  }).toThrow(errorIdUndefined));
