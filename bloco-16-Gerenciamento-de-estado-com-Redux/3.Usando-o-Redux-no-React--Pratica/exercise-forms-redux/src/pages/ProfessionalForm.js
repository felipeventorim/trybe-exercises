import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { submittedProfessionalInfos } from '../redux/actions/action';

import Input from '../components/Input';
import Button from '../components/Button';
import TextArea from '../components/TextArea';

class ProfessionalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: {
        resume: '',
        job: '',
        jobDescription: '',
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
    const { dispatchSubmittedProfessionalInfos } = this.props;
    const { infos } = this.state;

    this.setState({
      send: true,
    });
    dispatchSubmittedProfessionalInfos(infos);
  }

  render() {
    const { infos, send } = this.state;
    const {
      resume,
      job,
      jobDescription,
    } = infos;

    if (send) return <Redirect to="/formDisplay" />;

    return (
      <form>
        <fieldset>
          <TextArea name="resume" value={ resume } handleChange={ this.handleChange } />
          <Input name="job" value={ job } handleChange={ this.handleChange } />
          <TextArea
            name="jobDescription"
            value={ jobDescription }
            handleChange={ this.handleChange }
          />
        </fieldset>
        <Button sendButton={ this.sendButton } />
      </form>
    );
  }
}

ProfessionalForm.propTypes = {
  dispatchSubmittedProfessionalInfos: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchSubmittedProfessionalInfos: (infos) => dispatch(
    submittedProfessionalInfos(infos),
  ),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);
