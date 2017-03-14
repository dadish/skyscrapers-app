import * as a from '../actions';
import * as c from '../constants';

const actionsMap = [
  [ 'resetList', 'RESET_LIST' ],
  [ 'ajaxFetchStart', 'AJAX_FETCH_START' ],
  [ 'ajaxFetchEnd', 'AJAX_FETCH_END' ],
  [ 'ajaxFetchFail', 'AJAX_FETCH_FAIL' ],
  [ 'initialLoad', 'INITIAL_LOAD' ],
  [ 'activateItem', 'ACTIVATE_ITEM' ],
  [ 'deactivateItem', 'DEACTIVATE_ITEM' ],
  [ 'hitBottom', 'HIT_BOTTOM' ],
  [ 'showPopup', 'SHOW_POPUP' ],
  [ 'hidePopup', 'HIDE_POPUP' ],
  [ 'hideAllPopups', 'HIDE_ALL_POPUPS' ],
];

actionsMap.forEach(([ actionCreator, constant]) => {
  test(`actionCreator ${actionCreator} returns the right type`, () => {
    expect(a[actionCreator]().type).toBe(c[constant]);
  });
});