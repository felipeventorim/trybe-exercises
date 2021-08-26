import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const { name, value, handleChange } = this.props;
    return (
      <label htmlFor={ name }>
        { name }
        <textarea name={ name } value={ value } onChange={ handleChange } />
      </label>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
