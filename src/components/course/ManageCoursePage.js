/*
* Container component
*/
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props,context);
  }

  render() {
    return (
      <div>
        <h1>Manage Course</h1>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {

};

function mapStateToProps(state,ownProps) {
  // props:state
  return {

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
