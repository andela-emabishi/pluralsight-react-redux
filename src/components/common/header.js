import React from 'react';
import  {Link, IndexLink} from 'react-router';

import LoadingDots from './LoadingDots';

// Stateless functional component/ Presentational component
// Link the home url to the IndexRoute "/" which renders the HomePage component
// When this component is active, set a className of active
const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="about" activeClassName="active">About</Link>
      {" | "}
      <Link to="courses" activeClassName="active">Courses</Link>
      <LoadingDots interval={100} dots={20} />
    </nav>
  );
};

export default Header;
