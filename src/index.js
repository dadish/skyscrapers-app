import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';

const rootEl = document.getElementById('root');

export const renderRoot = (App, rootEl) => ReactDOM.render(
  <App />,
  rootEl
);

renderRoot(App, rootEl);

if (module.hot) {
  module.hot.accept('containers/App', () => {
    const NextApp = require('containers/App').default;
    renderRoot(NextApp, rootEl);
  });
}