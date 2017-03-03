import { combineEpics } from 'redux-observable';
import listCities, { listMoreCities } from './List/epic';

const epic = combineEpics(listCities, listMoreCities);

export default epic;