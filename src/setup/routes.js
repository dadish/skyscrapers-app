// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

import { getAsyncInjectors } from 'utils/asyncInjectors';

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory

  const { injectReducer, injectEpic } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        require.ensure([
          'containers/Images/constants',
          'containers/Images/reducer',
          'containers/Images/epic',
          'containers/Skyscrapers/constants',
          'containers/Skyscrapers/reducer',
          'containers/Skyscrapers/epic',
          'containers/Cities/constants',
          'containers/Cities/reducer',
          'containers/Cities/epic',
          'containers/Skyscrapers'
        ], (require) => {
          const renderRoute = loadModule(cb);
          const name = require('containers/Images/constants').NAME;
          injectEpic(name, require('containers/Images/epic').default);
          injectReducer(name, require('containers/Images/reducer').default);
          const skyName = require('containers/Skyscrapers/constants').NAME;
          const cityName = require('containers/Cities/constants').NAME;
          injectEpic(skyName, require('containers/Skyscrapers/epic').default);
          injectReducer(skyName, require('containers/Skyscrapers/reducer').default);
          injectEpic(cityName, require('containers/Cities/epic').default);
          injectReducer(cityName, require('containers/Cities/reducer').default);
          renderRoute(require('containers/Skyscrapers'));
        })
      },
      childRoutes: [
        {
          path: '/about',
          name: 'about',
          getComponent(nextState, cb) {
            require.ensure([
              'containers/AboutPage'
            ], (require) => {
              const renderRoute = loadModule(cb);
              const component = require('containers/AboutPage');
              renderRoute(component);
            })
          },
        }
      ]
    }, {
      path: '*',
      name: 'notFound',
      getComponent(nextState, cb) {
        require.ensure([
          'containers/NotFoundPage'
        ], (require) => {
          const renderRoute = loadModule(cb);
          const component = require('containers/NotFoundPage');
          renderRoute(component);
        })
      },
    }
  ];
}
