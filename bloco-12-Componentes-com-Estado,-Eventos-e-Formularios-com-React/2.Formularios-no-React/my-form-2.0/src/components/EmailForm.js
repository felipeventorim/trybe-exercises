import React from 'react';

export default class emailForm extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor='email'>
        email:
        <input
          type='text'
          name='email'
          value={value}
          id='email'
          onChange={handleChange}
          maxLength='50'
          required
        />
      </label>
    );
  }
}
