import React from 'react';
import { connect } from 'react-redux';
import { Label, Popup } from 'semantic-ui-react';
import { selectPopupOpen } from 'containers/Skyscrapers/selectors';
import * as a from 'containers/Skyscrapers/actions';

const { Detail: LDetail } = Label;

const buildPopupId = (id, inPopup = false) => {
  const prefix = 'year_';
  const suffix = inPopup ? '_popup' : '';
  return `${prefix}${id}${suffix}`;
};

export const YearTag = (props) => {
  const { skyscraper, goToPage, handlePopupClose, handlePopupOpen, popupOpen } = props;
  const year = skyscraper.get('year', '');
  const years = Math.floor(year / 10) * 10;
  const yearUrl = `/?year=${years}`;
  return (
    <Popup
      onClose={handlePopupClose}
      onOpen={handlePopupOpen}
      open={popupOpen}
      trigger={<Label as="a" href={yearUrl} onClick={goToPage(yearUrl)}>Year <LDetail>{year}</LDetail></Label>}
      content={<span>See all skyscrapers built in <strong>{years}</strong>s</span>}
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

export default connect(mapStateToProps, mapDispatchToProps)(YearTag);
