import { combineEpics } from 'redux-observable';
import { updateListEpic as updateSkyscrapers } from './List/epic';
import searchSkyscrapers from './Search/epic';

const epic = combineEpics(updateSkyscrapers, searchSkyscrapers);

export default epic;