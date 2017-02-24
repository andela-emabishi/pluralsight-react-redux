import * as actionTypes from './actionTypes';

// Action creator
export function beginAjaxCall() {
  return {
    type: actionTypes.BEGIN_AJAX_CALL
  };
}

// Action creator for ajax errors
export function ajaxCallError() {
  return {
    type: actionTypes.AJAX_CALL_ERROR
  };
}
