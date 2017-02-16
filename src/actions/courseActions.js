// Action creator function must return object with a type key whose value is the action type
// create course action will take a course as a parameter and return an object with a type and course
export function createCourse(course) {
  return {
    type: 'CREATE_COURSE',
    // Same as course: course
    course
  };
}
