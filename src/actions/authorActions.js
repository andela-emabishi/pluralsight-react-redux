// Should have actions for create,update and delete authors
import * as actionTypes from './actionTypes';
import authorApi from '../api/mockAuthorApi';

// Action creator
// Returns an action which consists of a type and some data
export function loadAuthorsSuccess(authors) {
  return  {
    type: actionTypes.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

// Thunk
// Delays dispatch until we get all the Authors, so that
// we alter state through the dispatcher in totality
// Action ==> Reducer ===> Store
export function loadAuthors() {
  return function(dispatch) {
    authorApi.getAllAuthors().then(function(authors) {
      // dispatch the action
      dispatch(loadAuthorsSuccess(authors));
    }).catch(function(error) {
      throw(error);
    });
  };
}

// ES6 version
// export function loadAuthors() {
//   return (dispatch) => {
//     authorApi.getAllCourses().then(authors => {
//       dispatch(loadAuthorsSuccess(authors));
//     });
//   }.catch(error => {
//     throw(error);
//   });
// }
