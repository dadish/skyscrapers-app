import { combineEpics } from 'redux-observable';
import listSkyscrapers from './List/epic';
import searchSkyscrapers from './Search/epic';

const epic = combineEpics(listSkyscrapers, searchSkyscrapers);

export default epic;