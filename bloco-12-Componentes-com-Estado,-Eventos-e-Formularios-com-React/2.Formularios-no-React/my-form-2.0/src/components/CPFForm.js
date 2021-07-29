import React from 'react';

export default class CPFForm extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor='CPF'>
        CPF:
        <input
          type='text'
          name='CPF'
          value={value}
          id='CPF'
          onChange={handleChange}
          maxLength='11'
          required
        />
      </label>
    );
  }
}
