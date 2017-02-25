import { List, Map } from 'immutable';
import {
  SUGGESTIONS_LOOKUP_END,
} from '../constants';

export const getItemProps = (item) => new Map({
  id: item.id,
  name: item.name,
  owner: item.owner.login,
  description: item.description,
  stargazers_count: item.stargazers_count,
  forks_count: item.forks_count,
  language: item.language,
});

export const initialSate = new List([].map(getItemProps));

const reducer = (state = initialSate, { type, payload, meta}) => {
  switch (type) {
    case SUGGESTIONS_LOOKUP_END:
      return new List(payload.items.map(getItemProps));
    default:
      return state;
  }
};

export default reducer;