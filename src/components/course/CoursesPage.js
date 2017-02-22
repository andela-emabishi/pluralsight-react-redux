import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; // Used to creact components that can interact with redux
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  // Initialise state in the component with a constructor
  constructor(props, context) {
    // keyword super is used to call functions on an object's parent i.e. in React.Component
    super(props, context);
    // bind this context of change handler to this of method
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    // Below same as calling this.props.courses to pass down courses array as prop
    // const {courses} = this.props;
    // courses={courses}

    return (
      <div>
        <h1>Courses</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage} />
        <CourseList courses={this.props.courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  // connect no longer injects dispatch as a property of the component because
  // mapDispatchToProps has been explicitly passed to connect
  // Instead, the actionCreator function becomes a property and is accessible as thus
  // dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  // Should return portion of state to be exposed to component
  // ownProps is object consisting of default react router children props passed down from main routing component
  return {
    // PROPS: STATE
    // Accessed in component as this.props.courses
    // Portion of state mapped to props is state.courses
    // courses key in state object influenced by courses parameter passed to combineReducers function
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  // Determines what actions are available to our component
  // Maps actions to props so that they are available to our component as props
  // Prop: function call to Dispatch(action)
  // Action wrapped in a call to dispatch so that when the action is triggered, the reducer is made aware
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))
    // Map dispatch to props using redux bindActionCreators
    // Wraps all actions/actionCreators in a call to dispatch
    actions: bindActionCreators(courseActions,dispatch)
  };
}
/*
  * mapDispatchToProps used to delineate what actions you want exposed to your component
  * If ommitted from call to the redux connect function, redux attaches a default dispatch property as a prop that
  * makes it possible to dispatch all the actions available to the component
*/

// const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectStateAndProps(CoursesPage);

// Same as above
// Used to connect component to provider component in order to connect component to store directly
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
