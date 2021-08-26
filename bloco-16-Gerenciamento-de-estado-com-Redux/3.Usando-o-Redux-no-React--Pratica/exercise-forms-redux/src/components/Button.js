import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { sendButton } = this.props;
    return (
      <button onClick={ sendButton } type="button">
        Enviar
      </button>
    );
  }
}

Button.propTypes = {
  sendButton: PropTypes.func.isRequired,
};

export default Button;
