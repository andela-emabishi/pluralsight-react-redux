/*
* At the root of the application, we configure the Redux store
* and wrap the root React-Router component with the React-Redux provider component
* in order to make the Redux store accessible to React-Redux connect calls with
* mapStateToProps and mapDispatchToProps
*/

import 'babel-polyfill'; // Handle set of es6 features that babel cannot transpile automatically i.e. Object.assign
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {Provider} from 'react-redux'; //High level component that attaches the store to the react container components
import {Router, browserHistory} from 'react-router'; //Use browser history for urls- no hash
import routes from './routes'; //Import routes to pass through parent route component
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

// We're calling the configure store function here that calls the redux createStore()
// function whilst passing into it the rootReducer, optionally the project initialState and middlear which will make it possible
// to have Thunks returned by our action creators

const store = configureStore(); // Optionally pass initial state here
// Provider component accepts store as prop and wraps top level router component
// Provider is a High level component that attaches the store to the react container components
// Enables our container components connect to the redux store

// Dispatch actions from store at entry point
// in order to Load courses and authors as soon as application loads
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

// Anchor React application to html node div app
render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
