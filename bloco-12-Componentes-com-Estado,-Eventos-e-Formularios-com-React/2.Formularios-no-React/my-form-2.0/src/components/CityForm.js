import React from 'react';

export default class CityForm extends React.Component {
  handleError({ target }) {
    if (!target.value[0] || target.value[0].match(/[0-9]/)) {
      target.value = '';
    }
  }

  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor='city'>
        City:
        <input
          type='text'
          name='city'
          value={value}
          id='city'
          onChange={handleChange}
          onBlur={this.handleError}
          maxLength='200'
          required
        />
      </label>
    );
  }
}
