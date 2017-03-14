// Root Reducer
// http://redux.js.org/docs/api/combineReducers.html
// Combines reducers into a single object to be passed into createStore
import {combineReducers} from 'redux';
import courses from './courseReducer';  // courseReducer aliased as courses
import authors from './authorReducer'; // authorReducer aliased as authors
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // define all reducers
  // courses key in state object influenced by courses parameter passed to combineReducers function
  courses, // courses: courses ==> ES6 shorthand property name. The courses redcuer will handle the courses part of state
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
