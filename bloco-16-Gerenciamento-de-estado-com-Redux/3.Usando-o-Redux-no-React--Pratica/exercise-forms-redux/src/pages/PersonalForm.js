import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { submittedPersonalInfos } from '../redux/actions/action';

import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: {
        name: '',
        email: '',
        cpf: '',
        address: '',
        city: '',
        state: '',
      },
      send: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendButton = this.sendButton.bind(this);
  }

  handleChange({ target }) {
    this.setState((prevState) => ({
      infos: {
        ...prevState.infos,
        [target.name]: target.value,
      },
    }));
  }

  sendButton() {
    const { dispatchSubmittedPersonalInfos } = this.props;
    const { infos } = this.state;

    this.setState({
      send: true,
    });

    dispatchSubmittedPersonalInfos(infos);
  }

  render() {
    const { infos, send } = this.state;
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
    } = infos;

    if (send) return <Redirect to="/ProfessionalForm" />;

    return (
      <form>
        <fieldset>
          <Input name="name" value={ name } handleChange={ this.handleChange } />
          <Input name="email" value={ email } handleChange={ this.handleChange } />
          <Input name="cpf" value={ cpf } handleChange={ this.handleChange } />
          <Input name="address" value={ address } handleChange={ this.handleChange } />
          <Input name="city" value={ city } handleChange={ this.handleChange } />
          <Select name="state" value={ state } handleChange={ this.handleChange } />
        </fieldset>
        <Button sendButton={ this.sendButton } />
      </form>
    );
  }
}

PersonalForm.propTypes = {
  dispatchSubmittedPersonalInfos: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSubmittedPersonalInfos: (infos) => dispatch(submittedPersonalInfos(infos)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);
