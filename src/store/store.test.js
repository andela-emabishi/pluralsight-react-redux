// Integration tests between Actions, Store and Reducers

import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Integration tests', () => {
  it('Should handle creating courses', () => {
    // Test that Action, Reducer and store work together to create courses
    // Setup store like in configure store
    // Pass initialState ad rootReducer
    const store = createStore(rootReducer, initialState);
    const course = {
      title: 'Git Hooks'
    };

    // Create action with createCourseSuccess action creator and
    // new course as parameter
    // TODO: Try creating multiple actions, dispatching them and asserting that the
    // results are predictable. You could create 2 courses and update one course
    const action = courseActions.createCourseSuccess(course);
    // dispatch action
    store.dispatch(action);

    const actual = store.getState().courses[0]; //added course
    const expected = {
      title: 'Git Hooks'
    };

    expect(actual).toEqual(expected);
  });
});
