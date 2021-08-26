import { SUBMIT_PROFESSIONAL_INFOS } from '../actions/action';

const INITIAL_STATE = {
  resume: '',
  job: '',
  jobDescription: '',
};

function professionalFormReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_PROFESSIONAL_INFOS:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}

export default professionalFormReducer;
