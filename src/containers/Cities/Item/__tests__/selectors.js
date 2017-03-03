import { fromJS } from 'immutable';
import { selectItem } from '../selectors';

const state = fromJS({
  cities: {
    list: [
      { id: "1", title: 'hey'},
      { id: "2", title: 'ho'},
      { id: "3", title: 'lets'},
      { id: "4", title: 'go'},
    ]
  }
});

test('selectItem selects the city by id at [`cities`, `list`].find(({ id }) => id === targetId)', () => {
  expect(selectItem("3")(state).toJS()).toEqual({ id: "3", title: 'lets'});
});