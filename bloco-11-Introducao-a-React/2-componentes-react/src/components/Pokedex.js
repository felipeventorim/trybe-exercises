import Pokemon from './Pokemon';
import pokemons from './Data'

function Pokedex() {
  return (
    <div className='container'>
      {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  );
}

export default Pokedex;