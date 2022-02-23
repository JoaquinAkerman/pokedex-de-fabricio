import { cargarPokemon } from '../../servicios/pokemon';

test('cargarPokemon con undefined da error', () => {
  expect(cargarPokemon(undefined)).rejects.toEqual(
    new Error('Se necesita un identificador para cargar un pokemón')
  );
});
jest.mock('../../api/pokemon.js', () => {
  const originalModule = jest.requireActual('../../api/pokemon.js');
  return {
    __esModule: true,
    ...originalModule,
    cargarPokemon: jest.fn((parametro) => {
      if (parametro === 2) return { soy: 'buscado de la Api', pokemon: true };
      else {
        throw new Error(`Pokemon con id  no encontrado`);
      }
    }),
  };
});

jest.mock('../../mapeadores/pokemon.js', () => {
  const originalModule = jest.requireActual('../../mapeadores/pokemon.js');
  return {
    __esModule: true,
    ...originalModule,
    mapearPokemon: jest.fn((o) => o),
  };
});

jest.mock('../../storage/pokemon.js', () => {
  const originalModule = jest.requireActual('../../storage/pokemon.js');
  return {
    __esModule: true,
    ...originalModule,
    guardarPokemon: jest.fn(),
    cargarPokemon: jest.fn((parametro) => {
      if (parametro === 1)
        return { soy: 'buscado de localStorage', pokemon: true };
      else {
        throw new Error(`Pokemon con id  no encontrado`);
      }
    }),
  };
});

describe('test', () => {
  it('testea cargarPokemon de servicios con localStorage', () => {
    expect(cargarPokemon(1)).resolves.toEqual({
      soy: 'buscado de localStorage',
      pokemon: true,
    });
  });
});

test('prueba cargarPokemon de servicios buscando un pokemon de Api', () => {
  expect(cargarPokemon(2)).resolves.toEqual({
    soy: 'buscado de la Api',
    pokemon: true,
  });
});
