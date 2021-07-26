import React from 'react';

const Button = ({ children, filteredPokemon }) => {
  return <button onClick={() => filteredPokemon(children)}>{children}</button>
}

export default Button;