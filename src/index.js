import 'babel-polyfill'; // Handle set of es6 features that babal cannot transpile automatically i.e. Object.assign
import React from 'react';
import {render} from 'react-dom'; // Import render so that we can use it in all our components
import configureStore from './store/configureStore';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {Provider} from 'react-redux'; //High level component that attaches the store to the react container components
import {Router, browserHistory} from 'react-router'; //Use browser history for urls- no hash
import routes from './routes'; //Import routes to pass through parent route component
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore(); // Optionally pass initial state here
// Provider component accepts store as prop and wraps top level router component
// Provider is a High level component that attaches the store to the react container components
// Enables our container components connect to the redux store

// Load courses as soon as application loads
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
