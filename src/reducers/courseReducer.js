// Reducer takes in state and an action and returns new state
// Set default state to empty array i.e. empty array of courses
// Trigger logic based on action type passed
// When the CREATE_COURSE action is triggered, the new course should be pushed into the state array
// Remember, we shouldn't mutate state directly
// We should always have  default statement that returns state

import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case actionTypes.LOAD_COURSES_SUCCESS: // i.e. LOAD_COURSES_SUCCESS action type
      return action.courses; //action comes with courses payload
    case actionTypes.CREATE_COURSE_SUCCESS: // add course into state
      return [
        // add course to deep copy of existing state
        ...state, Object.assign({}, action.course)
      ];
    case actionTypes.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}
