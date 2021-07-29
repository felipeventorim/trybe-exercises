import React from 'react';

export default class AddressForm extends React.Component {

  hendleAddress({ target }) {
    target.value = target.value.replace(/[\W\s]/g, '');
  }

  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor='address'>
        Address:
        <input
          type='text'
          name='address'
          value={value}
          id='address'
          onChange={handleChange}
          onBlur={this.hendleAddress}
          maxLength='200'
          required
        />
      </label>
    );
  }
}
