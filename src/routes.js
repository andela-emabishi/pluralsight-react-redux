import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

// Always load the app component as the react view controller- top level component
// that passes down route params as props
// Nest all components indside the app component
// Use the Home Component when someone vists the "/" or default route
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
