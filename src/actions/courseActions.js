// Action creator function must return object with a type key whose value is the action type
// create course action will take a course as a parameter and return an object with a type and course

import * as actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall} from './ajaxStatusActions';

// Action creator function wraps action in a function
export function loadCoursesSuccess(courses) {
  // Action consists of an action type and some data
  return {
    type: actionTypes.LOAD_COURSES_SUCCESS,
    // Same as course: course
    courses
  };
}

// May be prudent to create loadCoursesFailure action if it is appropriate to handle failure in an explicit way

// Thunk always returns a function that accepts a dispatch
// We'd like to be able to delay the dispatch of our actions until the most opportune time
// i.e. when we're able to resolve a promise
// Instead of an action returning an object, it can now return a function
export function loadCourses() {
  return function(dispatch) {
    // dispatch the action as soon as the loadCourses function is triggered on page load at the entrypoint of the application
    dispatch(beginAjaxCall());
    // courseApi.getAllCourses returns a promise, resolved by a then
    return courseApi.getAllCourses().then(courses => {
      // After the promise is resolved and we get the courses, dispatch the
      // action which will trigger the load of a list of courses on the courses page
      dispatch(loadCoursesSuccess(courses));
      // Throw error if anything occurs with the promise resolution
    }).catch(error => {
      throw(error);
    });
  };
}

// Action creator to update courses
export function updateCourseSuccess(course)  {
  return {
    type: actionTypes.UPDATE_COURSE_SUCCESS,
    course
  };
}

export function createCourseSuccess(course) {
  return {
    type: actionTypes.CREATE_COURSE_SUCCESS,
    course
  };
}

// Create or save course
export function saveCourse(course) {
  return function(dispatch) {
      dispatch(beginAjaxCall());
      courseApi.saveCourse(course).then(savedCourse => {
        course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      // If something wrong happens with the save, throw the error
      throw (error);
    });
  };
}
