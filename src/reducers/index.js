// Root Reducer
import {combineReducers} from 'redux';
import courses from './courseReducer';  // courseReducer aliased as courses

const rootReducer = combineReducers({
  // define all reducers
  courses // courses: courses ==> ES6 shorthand property name
});

export default rootReducer;
