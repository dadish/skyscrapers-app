import { combineEpics } from 'redux-observable';
import filterSkyscrapers from './Filter/epic';
import updateFilterForm, { initFilterForm } from './Filter/updateFilterEpic';
import wikipediaEpic from './WikipediaImages/epic';

const epic = combineEpics(updateFilterForm, filterSkyscrapers, initFilterForm, wikipediaEpic);

export default epic;