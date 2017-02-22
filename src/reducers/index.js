// Root Reducer
import {combineReducers} from 'redux';
import courses from './courseReducer';  // courseReducer aliased as courses
import authors from './authorReducer'; // authorReducer aliased as authors

const rootReducer = combineReducers({
  // define all reducers
  courses, // courses: courses ==> ES6 shorthand property name
  authors
});

export default rootReducer;
