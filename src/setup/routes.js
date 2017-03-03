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
          'containers/HomePage'
        ], (require) => {
          const renderRoute = loadModule(cb);
          renderRoute(require('containers/HomePage'));
        })
      },
      indexRoute: {
        name: 'skyscrapers',
        getComponent(nextState, cb) {
          require.ensure([
            'containers/Skyscrapers/reducer',
            'containers/Skyscrapers/epic',
            'containers/Cities/reducer',
            'containers/Cities/epic',
            'containers/Skyscrapers'
          ], (require) => {
            const renderRoute = loadModule(cb);
            injectEpic('skyscrapers', require('containers/Skyscrapers/epic').default);
            injectReducer('skyscrapers', require('containers/Skyscrapers/reducer').default);
            injectEpic('cities', require('containers/Cities/epic').default);
            injectReducer('cities', require('containers/Cities/reducer').default);
            renderRoute(require('containers/Skyscrapers'));
          })
        },
      },
      childRoutes: [
        {
          path: '/cities',
          name: 'cities',
          getComponent(nextState, cb) {
            require.ensure([
              'containers/Cities/reducer',
              'containers/Cities/epic',
              'containers/Cities'
            ], (require) => {
              const renderRoute = loadModule(cb);
              injectEpic('cities', require('containers/Cities/epic').default);
              injectReducer('cities', require('containers/Cities/reducer').default);
              renderRoute(require('containers/Cities'));
            })
          },
        }
      ]
    }, {
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
    },  {
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
