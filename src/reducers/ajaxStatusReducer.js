import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS'; //will return true or false
}
export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action) {
  if (action.type == actionTypes.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    // if the action tytpe ends in success, then the ajax call has been completed
    // because the action has been dispatched successfully.
    // The function actionTypeEndsInSuccess will return true hence the code block will be executed
    return state - 1;
  } else {
    return state;
  }
}
