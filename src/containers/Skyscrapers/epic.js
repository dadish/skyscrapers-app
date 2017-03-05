import { combineEpics } from 'redux-observable';
import filterSkyscrapers from './Filter/epic';
import updateFilterForm, { initFilterForm } from './Filter/updateFilterEpic';

const epic = combineEpics(updateFilterForm, filterSkyscrapers, initFilterForm);

export default epic;