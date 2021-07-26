import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
	constructor(props) {
		super()
		this.state = {
			position: 0,
			pokemonList: props.pokemons,
		}
		this.handleClick = this.handleClick.bind(this)
		this.filteredPokemon = this.filteredPokemon.bind(this)
	}
	
	filteredPokemon(pokemonType) {
		this.setState({
			position: 0,
			pokemonList: (pokemonType) ? this.props.pokemons.filter(({ type }) => type === pokemonType) : this.props.pokemons,
		})
	}

	handleClick() {
		this.setState((previousState) => ({
			position: (this.state.pokemonList[previousState.position + 1]) ? previousState.position + 1 : 0
		}))
	}

  render() {
		const { position, pokemonList } = this.state;
		const typeList = this.props.pokemons
			.map(({ type }) => type);
		const filteredTypeList = typeList
			.filter((type, index) => typeList.indexOf(type) === index)

    return (
      <>
        <div className='pokedex'>
          <Pokemon pokemon={pokemonList[position]} />
        </div>
				<div>
					<button onClick={() => this.filteredPokemon('')}>All</button>
					{
						filteredTypeList.map((type) =>
							<Button key={type} filteredPokemon={this.filteredPokemon}>{type}</Button>)
					}
				</div>
				<div>
					<button onClick={this.handleClick}>Next</button>
				</div>
      </>
    );
  }
}

export default Pokedex;
