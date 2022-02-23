import mostrarPaginador from '../paginador.js';
import fixture from './pokedex.fixture.js';

test('prueba que los botones del paginador comporten correctamente al inicio de la pokedex', () => {
  document.body.innerHTML = fixture;

  mostrarPaginador(
    1118,
    1,
    'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
    null
  );

  expect(document.querySelector('.page-item, .disabled').textContent).toContain(
    'Anterior'
  );
  expect(document.querySelector('.active').textContent).toContain('1');
});

test('prueba que los botones del paginador se comporten correctamente al final de la pokedez', () => {
  document.body.innerHTML = fixture;

  mostrarPaginador(
    1118,
    56,
    null,
    'https://pokeapi.co/api/v2/pokemon/?offset=1080&limit=20,'
  );

  expect(document.querySelector('.disabled').textContent).toContain(
    'Siguiente'
  );
  expect(document.querySelector('.active').textContent).toContain('56');
});
