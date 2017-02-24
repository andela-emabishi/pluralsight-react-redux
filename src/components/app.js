import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Header from './common/header';

// Top level component for our application
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
    // props: state
    // will return true if there are any ajax calls in progress and false f ot
    loading: state.numAjaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
