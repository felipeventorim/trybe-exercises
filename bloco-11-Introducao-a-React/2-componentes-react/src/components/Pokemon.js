import React from 'react';
import propTypes from 'prop-types';
import './Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon
    return (
      <div className='pokemom'>
        <div className='data'>
          <p>{name}</p>
          <p>{type}</p>
          <p>averageWeight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <div className='image'>
          <img src={image} alt={name} />
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  averageWeight: propTypes.shape({
    value: propTypes.number,
    measurementUnit: propTypes.string,
  }),
  image: propTypes.string,
}

export default Pokemon