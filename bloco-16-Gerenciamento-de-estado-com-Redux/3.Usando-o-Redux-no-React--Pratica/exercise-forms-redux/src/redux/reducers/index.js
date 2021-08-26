import { combineReducers } from 'redux';
import personalFormReducer from './personalFormReducer';
import professionalFormReducer from './professionalFormReducer';

const rootReducers = combineReducers({
  personalInfos: personalFormReducer,
  professionalInfos: professionalFormReducer,
});

export default rootReducers;
