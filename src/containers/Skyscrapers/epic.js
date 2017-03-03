import { combineEpics } from 'redux-observable';
import {
  updateListEpic as updateSkyscrapers,
  initListEpic as initSkyscrapers,
} from './List/epic';
import filterSkyscrapers from './Filter/epic';

const epic = combineEpics(initSkyscrapers, updateSkyscrapers, filterSkyscrapers);

export default epic;