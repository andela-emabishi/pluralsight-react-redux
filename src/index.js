import 'babel-polyfill'; // Handle set of es6 features that babal cannot transpile automatically i.e. Object.assign
import React from 'react';
import {render} from 'react-dom'; // Import render so that we can use it in all our components
import {Router, browserHistory} from 'react-router'; //Use browser history for urls- no hash
import routes from './routes'; //Import routes to pass through parent route component
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <Router history={browserHistory} routes={routes} />, document.getElementById('app')
);
