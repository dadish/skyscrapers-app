import { combineEpics } from 'redux-observable';
import searchCities from './Search/epic';

const epic = combineEpics(searchCities);

export default epic;