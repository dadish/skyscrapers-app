import React from 'react';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import { fromJS } from 'immutable';
import configureStore from 'setup/store';
import { makeSelectLocationState } from 'setup/selectors';
import createRoutes from 'setup/routes';
import 'semantic-ui-css/semantic.css';
import './style.css';

import Header from 'containers/Header';

export const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createbrowserHistory)();`
const initialState = fromJS({});
const store = configureStore(initialState, browserHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: makeSelectLocationState(),
});

// Set up the router, wrapping all Routes in the App component
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};

const AppWrapper = () => (
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
      render={
        // Scroll to top when going to a new page, imitating default browser
        // behaviour
        applyRouterMiddleware(useScroll())
      }
    />
  </Provider>
);

export default AppWrapper;
