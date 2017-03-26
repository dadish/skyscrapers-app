import { fromJS } from 'immutable'
import {
  selectLocationPathname,
  selectLocationQuery,
  selectLocationSearch,
  selectWindowWidth,
} from '../selectors'

const pathname = 'skyscrapers/App/pathname'
const search = 'skyscrapers/App/search'
const query = 'skyscrapers/App/query'

const windowWidth = 22354655

const state = fromJS({
  route: {
    locationBeforeTransitions: {
      pathname,
      search,
      query,
    }
  },
  app: {
    windowWidth
  }
})

test('selectLocationPathname() selects [`route`, `locationBeforeTransitions`, `pathname`]', () => {
  expect(selectLocationPathname()(state)).toBe(pathname)
})

test('selectLocationQuery() selects [`route`, `locationBeforeTransitions`, `query`]', () => {
  expect(selectLocationQuery()(state)).toBe(query)
})

test('selectLocationSearch() selects [`route`, `locationBeforeTransitions`, `search`]', () => {
  expect(selectLocationSearch()(state)).toBe(search)
})

test('selectWindowWidth selects [`app`, `windowWidth`]', () => {
  expect(selectWindowWidth()(state)).toBe(windowWidth)
})