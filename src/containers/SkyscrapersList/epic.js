import { combineEpics } from 'redux-observable';
import {
  updateListEpic as updateSkyscrapers,
  initListEpic as initSkyscrapers,
} from './List/epic';
import searchSkyscrapers from './Search/epic';

const epic = combineEpics(initSkyscrapers, updateSkyscrapers, searchSkyscrapers);

export default epic;