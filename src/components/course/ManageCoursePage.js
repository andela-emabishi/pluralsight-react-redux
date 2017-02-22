/*
* Container component
*/
import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; // Provides functionality for components to connect to the store
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props,context);

    // Initialise the component state
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  // Called anytime props change or when React thinks props have changed
  componentWillReceiveProps(nextProps) {
    // i.e. do this if props have changed - update state with new props if props have changed. If props haven't changed, do nothing
    return this.props.course.id != nextProps.course.id ? this.setState({course: Object.assign({}, nextProps.course)}): null;
  }

  updateCourseState(event) {
    // i.e. field = name
    const field = event.target.name;
    let course = this.state.course;
    // event.target.value holds the information entered in the field
    course[field] = event.target.value;
    return this.setState({
      course: course
    });
  }

  saveCourse(event) {
    event.preventDefault();
    // all actions now mapped to props through mapDispatchToProps
    this.props.actions.saveCourse(this.state.course);
    // After save, push '/courses' string to url to redirect user to courses route
    this.context.router.push('/courses');
  }

  render() {
    return (
      <div>
        <CourseForm
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}
          onChange={this.updateCourseState}
          onSave={this.saveCourse}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  // Array of objects
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
// Redirect user to coursesList when they've saved a course using contextTypes from rect-router
// Makes react router context available to component
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseByID(courses, id) {
  // Filter courses for the one with a specific id
  // Filter always returns an array, so we stil have to pick the first
  const course = courses.filter(course => course.id == id);
  // If we don't find a matching course
  return course ? course[0] : null;
  // if (course) return course[0];
  // return null;
}

function mapStateToProps(state,ownProps) {
  console.log('OWN PROPS', ownProps);
  const courseId = ownProps.params.id; // ownProps passed from reaact-router overarching component i.e. from path /course/:id
  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };

// If course exists and courses have been loaded from the API
  if (courseId && state.courses.length > 0) {
    course = getCourseByID(state.courses, courseId);
  }
  // Select input component expects object with value and text keys
  const authorsFormattedForDropDown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  // props:state
  // State accessible as this.props.course
  return {
    course: course,
    authors: authorsFormattedForDropDown
  };
}

function mapDispatchToProps(dispatch) {
  // Map the dispatch of an action to props
  // Make actions accessible and dispatchable through props
  // Prop: function call to Dispatch(action)
  // courses: course => dispatch(action(param))
  // courses: function(course) {dispatch(action(param))}
  // OR use bindActionCreators --> Makes all actions available to component
  // prop: bindActionCreators(AllRelevantActions, dispatch)
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
