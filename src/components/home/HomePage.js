import React from 'react';
import {Link} from 'react-router';

// Indexroute in routes.js, component routed to when user is at "/" route
class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
          <p>React, Redux and React Router</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
