import { combineEpics } from 'redux-observable';
import filterSkyscrapers from './Filter/epic';

const epic = combineEpics(filterSkyscrapers);

export default epic;