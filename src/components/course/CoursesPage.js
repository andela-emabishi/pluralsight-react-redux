import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context); // Call parent class constructor in order to inherit props and context
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
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
};


/**
 * [mapStateToProps subscribes component to redux store updates.Called whenever store updates]
 * @param  {[type]} state    [Portion of state accessible to component]
 * @param  {[type]} ownProps [Components own props. If using react router,
 * props passed down from view controller component i.e. App = {this.props.children}]
 * @return {[object]}        [Map of props to state]
 */
function mapStateToProps(state, ownProps) {
  return {
    // connect function will give mapStateToProps() access to the state object
    // Courses Action Creator returns {type, courses}
    // courses key in state object influenced by courses parameter passed to combineReducers function
    courses: state.courses
  };
}

/**
 * [mapDispatchToProps Maps dispatch(actions) to a prop]
 * @param  {[type]} dispatch [dispatch(actionCreator(arg))]
 */
function mapDispatchToProps(dispatch) {
  return {
    // Wraps all actions/actionCreators in a call to dispatch
    actions: bindActionCreators(courseActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
