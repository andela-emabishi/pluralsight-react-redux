// Reducer takes in state and an action and returns new state
// Set default state to empty array i.e. empty array of courses
// Trigger logic based on action type passed
// When the CREATE_COURSE action is triggered, the new course should be pushed into the state array
// Remember, we shouldn't mutate state directly
// We should always have  default statement that returns state

import * as actionTypes from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.CREATE_COURSE: // i.e. CREATE_COURSE action type
    // Return new array with mutated state
      return [...state,
        Object.assign({}, action.course)
      ];
      // OR

      // return {
      //   ...state, state.push(action.course)
      // }

      // OR
      // return Object.assign({}, state, state.push(action.course));
    default:
      return state;
  }
}
