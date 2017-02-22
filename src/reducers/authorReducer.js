// Takes in state and an action and returns new state
import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state= initialState.authors, action) {
  switch(action.type) {
    case actionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
    // If nothing has happened i.e. no case has been triggered,
    // leave state alone
    return state;
  }
}
