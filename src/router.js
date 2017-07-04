import React, { Component, PropTypes } from 'react';
import { addLocaleData , IntlProvider } from 'react-intl';
import { Router, Route, Link, browserHistory, IndexRoute, Redirect} from 'react-router';
import ReactDom from 'react-dom';
// import App from './components/app';
// import details from './components/details';
// import dashboard from './components/dashboard';
// const Root = () => (
//     <Provider store={store}>
//         <IndexContainer />
//     </Provider>
// );
// export default Root;
// 方案一
const rootRoute = {
  childRoutes:[{
    path: '/',
    component: require('./components/app').default,
    getIndexRoute(location, callback) {
      require.ensure([], function (require) {
        callback(null, {
          component: require('./components/dashboard').default
        })
      })
    },
    childRoutes: [
      { path: 'dashboard', component: require('./components/dashboard').default },
      { path: 'details', component: require('./components/details').default },
      { path: 'login', component: require('./components/login').default }
    ]
  }]
}

ReactDom.render(
  (
      <Router history={browserHistory} routes={rootRoute}/>
  ), document.getElementById('app')
);


// 方案二
// const details = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('./components/details').default)
//     },'details')
// }
// const dashboard = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('./components/dashboard').default)
//     },'dashboard')
// }
// ReactDom.render((
//     <Router history={hashHistory} >
//         <Route path="/" component={App}>
//           <IndexRoute getComponent={dashboard} />
//           <Route path="/dashboard" getComponent={dashboard}/>
//           <Route path="/details" getComponent={details}/>
//         </Route>
//     </Router>
// ), document.getElementById('app'));
