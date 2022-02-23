//import { cargarPokemon } from '../../api/pokemon.js';
import mostrarPokemon from '../pokemon.js';
import fixture from './pokedex.fixture.js';
import pokemonBulbasaur from './bulbasaur.fixture.js';

test('prueba que mostrarPokemon haga los cambios correspondientes', () => {
  document.body.innerHTML = fixture;
  mostrarPokemon(pokemonBulbasaur);
  expect(document.querySelector('#pokemon-nombre').textContent).toContain(
    pokemonBulbasaur.nombre
  );
  expect(document.querySelector('#pokemon-id').textContent).toContain(
    pokemonBulbasaur.id
  );
  expect(document.querySelector('#pokemon-imagen').src).toContain(
    pokemonBulbasaur.foto
  );
});
