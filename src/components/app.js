import React, {PropTypes} from 'react';
import Header from './common/header';

// Top level component for our application
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

// Proptype validation for props from react-router
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
