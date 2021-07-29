import React from 'react';

export default class HousingTypeForm extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor='type'>
        Tipo:
        <input
          type='radio'
          name='type'
          value={value}
          id='type'
          onChange={handleChange}
          required
        />
        Casa
        <input
          type='radio'
          name='type'
          value={value}
          id='type'
          onChange={handleChange}
          required
        />
        Apartamento
      </label>
    );
  }
}
