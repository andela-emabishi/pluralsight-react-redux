import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Test Course Reducer', () => {
  it('should add a course to state when passed CREATE_COURSE_SUCCESS', () => {
    // reducer(state,action) ===> new state
    // assert that when the reducer is passed an action and old state,
    //  it returns a new state object
    const initialState = [{title: 'A'}, {title: 'B'}];
    const newCourse = {title: 'C'};
    const action = actions.createCourseSuccess(newCourse);
    const newState = courseReducer(initialState, action);
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toBe('A');
    expect(newState[1].title).toBe('B');
    expect(newState[2].title).toBe('C');
  });
  it('should update a course already in state when passed UPDATE_COURSE_SUCCESS', () => {
    const initialState = [
      {id: 'A', title: 'A' },
      {id: 'B', title: 'B' },
      {id: 'C', title: 'C' }
    ];
    const newCourse = {id: 'B', title: 'New Title'};
    const action = actions.updateCourseSuccess(newCourse);
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(searchCourse => searchCourse.id == newCourse.id);
    const untouchedCourse = newState.find(searchCourse => searchCourse.id == 'A');

    expect(updatedCourse.title).toEqual('New Title');
    expect(untouchedCourse.title).toEqual('A');
    expect(newState.length).toEqual(3);
  });
});
