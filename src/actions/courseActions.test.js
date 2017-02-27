import expect from 'expect';
import * as actionTypes from './actionTypes';
import * as courseActions from './courseActions';

import thunk from 'redux-thunk';
import nock from 'nock'; //mock node http requests, for asynchronous behaviour
import configureMockStore from 'redux-mock-store';

// Testing action creators
// Should return an object of the form {type, data}
describe('Course Actions', () => {
  describe('Create course success', () => {
    it('Should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {
        id: 'git-hooks',
        title: 'Git Hooks'
      };
      const expectedAction = {
        type: actionTypes.CREATE_COURSE_SUCCESS,
        course
      };
      const action = courseActions.createCourseSuccess(course);

      expect(action).toEqual(expectedAction);
      expect(action.type).toBe('CREATE_COURSE_SUCCESS');
    });
  });
});

//Test Thunks
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Asynchronous Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should dispatch BEGIN_AJAX_CALL action and LOAD_COURSES_SUCCESS action \
      when loading courses', (done) => {
        // should call done when the asymc process is complete
        // If using an actual API use nock here to mock api call with certain results
        // nock('http//www.test.com')
        //   .get('/courses')
        //        //Fake response that we expect to get
        //      .reply(200, body: {courses: [{id:'git-hooks', title:'Git Hooks'}]})
        const expectedActions = [
          {type: actionTypes.BEGIN_AJAX_CALL},
          {type: actionTypes.LOAD_COURSES_SUCCESS, body: {courses: [{id:'git-hooks', title:'Git Hooks'}]}}
        ];
        const store = mockStore({courses: []}, expectedActions);
        store.dispatch(courseActions.loadCourses()).then(() => {
          const actions = store.getActions();
          expect(actions[0].type).toEqual(actionTypes.BEGIN_AJAX_CALL);
          expect(actions[1].type).toEqual(actionTypes.LOAD_COURSES_SUCCESS);
          // Tells Mocha that the async work is complete
          done();
        });
      });
});
