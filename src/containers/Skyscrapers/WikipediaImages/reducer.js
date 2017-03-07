import { fromJS } from 'immutable';

const initialState = fromJS({
  list: []
})

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;