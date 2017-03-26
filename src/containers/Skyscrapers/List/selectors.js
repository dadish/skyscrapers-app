import { createSelector } from 'reselect'
import { selectWindowWidth } from 'containers/App/selectors'
import { selectSkyscrapers } from '../selectors'


export const selectList = () => createSelector(
  selectSkyscrapers(),
  skyscrapers => skyscrapers.get('list'),
)

export const selectImagelessWikipediaIds = () => createSelector(
  selectList(),
  list => list
    .filter(item => !item.get('images'))
    .map(item => item.get('wikipedia_id'))
)

export const selectGridColumns = () => createSelector(
  selectWindowWidth(),
  width => {
    if (width <= 1000 && width > 767) return 3
    else if (width <= 600) return 1
    else return 2
  }
)