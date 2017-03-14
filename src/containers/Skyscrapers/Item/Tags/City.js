import React from 'react';
import { connect } from 'react-redux';
import { Label, Icon, Popup } from 'semantic-ui-react';
import { selectPopupOpen } from 'containers/Skyscrapers/selectors';
import * as a from 'containers/Skyscrapers/actions';
import { selectItem as selectCity } from 'containers/Cities/Item/selectors';

const buildPopupId = (id, inPopup = false) => {
  const prefix = 'city_';
  const suffix = inPopup ? '_popup' : '';
  return `${prefix}${id}${suffix}`;
};

export const CityTag = (props) => {
  const { city, goToPage, handlePopupClose, handlePopupOpen, popupOpen } = props;
  const cityUrl = city ? `/?cities=${city.get('id')}` : null;
  const cityTitle = city ? city.get('title') : null;

  return (
    <Popup
      onClose={handlePopupClose}
      onOpen={handlePopupOpen}
      open={popupOpen}
      trigger={<Label as="a" href={cityUrl} onClick={goToPage(cityUrl)}><Icon name="location arrow" /> {cityTitle}</Label>}
      content={<span>See all skyscrapers in <strong>{cityTitle}</strong></span>}
    />
  );
};

const mapStateToProps = () => (state, { skyscraper, inPopup }) => ({
  city: selectCity(skyscraper.get('parentID'))(state),
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

export default connect(mapStateToProps, mapDispatchToProps)(CityTag);