import { combineReducers } from 'redux';
import setInfosForms from './setInfosForms';

const allReducers = combineReducers({
  infosForms: setInfosForms,
});

export default allReducers;
