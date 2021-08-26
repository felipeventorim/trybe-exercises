import { SUBMIT_PERSONAL_INFOS } from '../actions/action';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
};

function personalFormReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT_PERSONAL_INFOS:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
}

export default personalFormReducer;
