import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends React.Component {
  render() {
    const { personalInfos, professionalInfos } = this.props;
    const { name, email, cpf, address, city, state } = personalInfos;
    const { resume, job, jobDescription } = professionalInfos;

    return (
      <div>
        <div>
          Personal Infos:
          <div>{name}</div>
          <div>{email}</div>
          <div>{cpf}</div>
          <div>{address}</div>
          <div>{city}</div>
          <div>{state}</div>
        </div>
        <hr />
        <div>
          Professional Infos:
          <div>{resume}</div>
          <div>{job}</div>
          <div>{jobDescription}</div>
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  personalInfos: PropTypes.shape(PropTypes.object).isRequired,
  professionalInfos: PropTypes.shape(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  personalInfos: state.personalInfos,
  professionalInfos: state.professionalInfos,
});

export default connect(mapStateToProps)(FormDataDisplay);
