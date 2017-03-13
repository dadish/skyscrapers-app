import { combineEpics } from 'redux-observable';
import filterSkyscrapers from './Filter/epic';
import { scrollEpic, appendEpic } from './List/epic';
import updateFilterForm, { initFilterForm } from './Filter/updateFilterEpic';

const epic = combineEpics(
  updateFilterForm,
  filterSkyscrapers,
  initFilterForm,
  scrollEpic,
  appendEpic,
);

export default epic;