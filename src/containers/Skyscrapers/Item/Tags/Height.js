import React from 'react';
import { connect } from 'react-redux';
import { Label, Popup } from 'semantic-ui-react';
import { selectPopupOpen } from 'containers/Skyscrapers/selectors';
import * as a from 'containers/Skyscrapers/actions';
import {
  getHeightFilterValue,
  getHeightPopupStr,
} from '../selectors';

const { Detail: LDetail } = Label;

const buildPopupId = (id, inPopup = false) => {
  const prefix = 'height_';
  const suffix = inPopup ? '_popup' : '';
  return `${prefix}${id}${suffix}`;
};

export const HeightTag = (props) => {
  const { skyscraper, goToPage, handlePopupClose, handlePopupOpen, popupOpen } = props;
  const height = skyscraper.get('height', '');
  const heightUrl = `/?height=${getHeightFilterValue(height)}`;
  const heightPopup = getHeightPopupStr(height);
  return (
    <Popup
      onClose={handlePopupClose}
      onOpen={handlePopupOpen}
      open={popupOpen}
      trigger={<Label as="a" href={heightUrl} onClick={goToPage(heightUrl)}>Height <LDetail>{height} ft.</LDetail></Label>}
      content={heightPopup}
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

export default connect(mapStateToProps, mapDispatchToProps)(HeightTag);