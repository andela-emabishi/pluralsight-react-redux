import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; // Used to create components that can interact with redux
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

// Container component. Interacts with Redux and passes down props to presentational components
// React.Component is an abstract class. Hence we have to create a usable subclass
// of it by extending it with our own class
// Extends used to create a class as a child of another class. In this case CoursesPage subclasses React.Component
class CoursesPage extends React.Component {
  // Initialise props and context in class by using constructor and super(props, context), otherwise, subsequent calls to
  // {this.props.something} or {this.context} will result in undefined.
  // i.e. instantiate props along with class on component insertion into DOM
  // https://facebook.github.io/react/docs/react-component.html#constructor

  // No need to have a constructor if you're not initialising state or binding context
  // Subclass needs its own implementation of a constructor if it would like to inherit attributes of base/parent class
  // and to initialise its own attributes at instantiation
  constructor(props, context) {
    // keyword super is used to call functions on an object's parent i.e. functions in React.Component
    // Super, referencing the parent class React.Component, is called with props and context
    // in order to initialise the instance of the parent class with the arguments props and context
    // super() calls the constructor of the parent class. super(props,context) instantiates new class with attributes of parent class
    // ES6 class constructors MUST call super if they are subclasses. http://cheng.logdown.com/posts/2016/03/26/683329
    super(props, context);
    // Constructor needs to call super before using 'this'
    // this context is derived from the derived component class which derives it from an instantiation of the parent class
    // bind this context of change handler to this of class CoursesPage
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

  redirectToAddCoursePage() {
    // When the add course button is clicked, this function is called
    // It directs the user to the /course route
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
  // ownProps is object consisting of default react router children props passed down from main routing component router
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
  // PROPS: DISPATCH(ACTION)
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
  * If ommitted from call to the redux connect function, i.e. connect(mapStateToProps),
  // redux attaches a default dispatch property as a component prop that
  * makes it possible to dispatch all the actions available to the component
*/

// const connectStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectStateAndProps(CoursesPage);

// Same as above
// Used to connect component to provider component in order to connect component to store directly
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
