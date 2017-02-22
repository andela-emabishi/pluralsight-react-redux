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
  }

  render() {
    return (
      <div>
        <CourseForm
          allAuthors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  // Array of objects
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps) {
  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };
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
