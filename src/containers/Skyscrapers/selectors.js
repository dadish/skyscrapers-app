import { createSelector } from 'reselect'
import { selectWindowWidth } from 'containers/App/selectors'

export const selectSkyscrapers = () => state => state.get('skyscrapers');

export const selectLoading = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('loading'),
);

export const selectListTotal = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('listTotal'),
);

export const selectListLimit = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('listLimit'),
);

export const selectListStart = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('listStart'),
);

export const selectPopups = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('popups'),
);

export const selectPopupOpen = (popupId) => createSelector(
  selectPopups(),
  popups => popups.findIndex(it => it === popupId) !== -1,
);

export const selectGridColumns = () => createSelector(
  selectWindowWidth(),
  width => width <= 1000 ? 1 : 2
)
