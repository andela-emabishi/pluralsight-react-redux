import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; // Used to creact components that can interact with redux
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  // Initialise state in the component with a constructor
  constructor(props, context) {
    // keyword super is used to call functions on an object's parent i.e. in React.Component
    super(props, context);
    // this refers to the CoursesPage class while inside the constructor
    this.state = {
      // Set initial title state to null
      course: { title: '' }
    };
    // bind this context of change handler in form to this context of class/component
    // If we don't do this, the this context of the form will be taken as default
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    // this needs to be bound to the class/component not to the context of the form
    // console.log('onTitleChange', this)
    const course = this.state.course;
    // Set course value in state to value of course title in input form
    course.title = event.target.value;
    // Update state
    this.setState({ course: course });
  }

  onClickSave() {
    // dispatch create course function
    // this.props.dispatch(actionCreator(param))
    //If mapDispatchToProps not passed into connect, a prop called dispatch is made available
    // this.props.dispatch(courseActions.createCourse(this.state.course));

    // If mapDispatchToProps specified as aargument in connect functionm the action/action creator function is passed into the component as
    // a prop and can be accessed directly
    // this.props.createCourse(this.state.course);
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    // Each iteration that renders a row must have a unique key
    // In this case, the key maps to the index of each element in the array
    // so that react can properly keep track of which row has been rendered
    // This function is called for each course row
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}
        />
      </div>
    );
  }
}

// propType validation
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired
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
  // Determines what actions are available in our component
  // Maps actions to props so that they are available to our component as props
  // Action: call to Dispatch
  // Action wrapped in a call to dispatch so that when the action is triggered, the reducer is made aware
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course))

    // Map dispatch to props using redux bindActionCreators
    // Wraps all actions in a call to dispatch
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
