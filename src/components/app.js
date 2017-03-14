import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Header from './common/header';

// Top level component for our application
// Should always return {this.props.children} from top level Route component in index.js
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}

// Proptype validation for props from react-router
App.propTypes = {
  children: PropTypes.object.isRequired
  // loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    // For loading progress bar
    // props: state
    // will return true if there are any ajax calls in progress and false if not
    loading: state.numAjaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
