import cargarPokemones from '../pokedex.js';
import cambiarPagina from '../pokedex.js';
import pokedexFixture from './pokedex.fixture.js';

test('prueba cambiar pagina', () => {
  document.body.innerHTML = pokedexFixture;

  jest.mock('../servicios/pokemon.js', () => {
    const originalModule = jest.requireActual('../servicios/pokemon.js');
    return {
      __esModule: true,
      ...originalModule,
      cargarPokemones: jest.fn(),
    };
  });

  jest.mock('../pokedex.js', () => {
    const originalModule = jest.requireActual('../pokedex.js');
    return {
      __esModule: true,
      ...originalModule,
      inicializar: jest.fn(),
    };
  });

  cambiarPagina(2);
  console.log(cargarPokemones);
  expect(cargarPokemones).toHaveBeenCalledWith(20, 40);
});
