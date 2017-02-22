import * as actionTypes from './actionTypes';

// Action creator
export function beginAjaxCall() {
  return {
    type: actionTypes.BEGIN_AJAX_CALL
  };
}
