import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, value, handleChange } = this.props;
    return (
      <label htmlFor={ name }>
        { name }
        <input name={ name } value={ value } onChange={ handleChange } type="text" />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
