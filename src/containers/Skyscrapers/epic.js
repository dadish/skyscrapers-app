import { combineEpics } from 'redux-observable';
import filterSkyscrapers from './Filter/epic';
import updateFilter from './Filter/updateFilterEpic';

const epic = combineEpics(updateFilter, filterSkyscrapers);

export default epic;