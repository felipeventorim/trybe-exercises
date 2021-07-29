import React from 'react';

export default class NameForm extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor='name'>
        Name:
        <input
          type='text'
          name='name'
          value={value}
          id='name'
          onChange={handleChange}
          maxLength='40'
          required
        />
      </label>
    );
  }
}
