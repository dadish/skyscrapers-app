import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import {
  HeaderComponent as Header,
 mapDispatchToProps,
  mapStateToProps, 
} from './index';
import { changeSearchTxt } from '../actions';

test('renders without crash', () => {
  shallow(<Header />);
});

test('mapDispatchToProps(dispatch).handleChange dispatches changeSearchTxt with obj.target.value', () => {
  const ev = { target: { value: 'banana' } };
  const dispatch = jest.fn();
  const { handleChange } = mapDispatchToProps(dispatch);
  handleChange(ev);
  expect(dispatch.mock.calls[0][0]).toEqual(changeSearchTxt(ev.target.value));
});

test('mapstateToProps(state).searchTxt is the searchTxt property of liveSearch state', () => {
  const target = 'as,dkjr';
  const { searchTxt } = mapStateToProps()(fromJS({ liveSearch: { searchTxt: target }}));
  expect(searchTxt).toBe(target);
});