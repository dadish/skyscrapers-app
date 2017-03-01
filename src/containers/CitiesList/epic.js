import { combineEpics } from 'redux-observable';
import searchEpic from './Search/epic';


const epic = combineEpics(searchEpic);

export default epic;