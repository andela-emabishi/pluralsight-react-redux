import React, {PropTypes} from 'react';
import {connect} from 'react-redux'; // Used to creact components that can interact with redux
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
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, index) {
    // Each iteration that renders a row must have a unique key
    // In this case, the key maps to the index of each element in the array
    // so that react can properly keep track of which row has been rednered
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
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  // Should return portion of state to be exposed to component
  return {
    // Accessed in component as this.props.courses
    // Portion of state mapped to props is state.courses
    // courses key in state object influenced by courses parameter passed to combineReducers function
    courses: state.courses
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
export default connect(mapStateToProps)(CoursesPage);
