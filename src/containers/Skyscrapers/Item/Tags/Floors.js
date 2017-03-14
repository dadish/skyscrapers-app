import React from 'react';
import { connect } from 'react-redux';
import { Label, Popup } from 'semantic-ui-react';
import { selectPopupOpen } from 'containers/Skyscrapers/selectors';
import * as a from 'containers/Skyscrapers/actions';
import {
  getFloorsFilterValue,
  getFloorsPopupStr,
} from '../selectors';

const { Detail: LDetail } = Label;

const buildPopupId = (id, inPopup = false) => {
  const prefix = 'floors_';
  const suffix = inPopup ? '_popup' : '';
  return `${prefix}${id}${suffix}`;
};

export const FloorsTag = (props) => {
  const { skyscraper, goToPage, handlePopupClose, handlePopupOpen, popupOpen } = props;
  const floors = skyscraper.get('floors', '');
  const floorsUrl = `/?floors=${getFloorsFilterValue(floors)}`;
  const floorsPopup = getFloorsPopupStr(floors);
  return (
    <Popup
      onClose={handlePopupClose}
      onOpen={handlePopupOpen}
      open={popupOpen}
      trigger={<Label as="a" href={floorsUrl} onClick={goToPage(floorsUrl)}> Floors <LDetail>{floors}</LDetail> </Label>}
      content={floorsPopup}
    />
  );
};

const mapStateToProps = () => (state, { skyscraper, inPopup }) => ({
  popupOpen: selectPopupOpen(buildPopupId(skyscraper.get('id'), inPopup))(state),
});

const mapDispatchToProps = (dispatch, { skyscraper, inPopup }) => ({
  handlePopupOpen: () => {
    const id = skyscraper.get('id');
    const popupId = buildPopupId(id, inPopup);
    return dispatch(a.showPopup(popupId));
  },
  handlePopupClose: () => {
    const id = skyscraper.get('id');
    const popupId = buildPopupId(id, inPopup);
    return dispatch(a.hidePopup(popupId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FloorsTag);
