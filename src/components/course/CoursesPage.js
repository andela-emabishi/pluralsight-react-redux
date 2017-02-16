import React, {PropTypes} from 'react';

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
    alert(`Saving ${this.state.course.title}`);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
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

export default CoursesPage;
