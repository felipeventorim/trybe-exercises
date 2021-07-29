import React from 'react';
import EmailForm from './EmailForm';
import NameForm from './NameForm';
import CPFForm from './CPFForm';
import AddressForm from './AddressForm';
import CityForm from './CityForm';
import StateForm from './StateForm';
import HousingTypeForm from './HousingTypeForm';

export default class Forms extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      CPF: '',
      address: '',
      city: '',
      state: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <fieldset>
          <NameForm value={this.state.name} handleChange={this.handleChange} />
          <EmailForm value={this.state.email} handleChange={this.handleChange} />
          <CPFForm value={this.state.CPF} handleChange={this.handleChange} />
          <AddressForm value={this.state.address} handleChange={this.handleChange} />
          <CityForm value={this.state.city} handleChange={this.handleChange} />
          <StateForm value={this.state.state} handleChange={this.handleChange} />
          <HousingTypeForm value={this.state.state} handleChange={this.handleChange} />
        </fieldset>
      </form>
    );
  }
}
