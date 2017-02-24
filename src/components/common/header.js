import React, {PropTypes} from 'react';
import  {Link, IndexLink} from 'react-router';

import LoadingDots from './LoadingDots';

// Header.propTypes = {
//   loading: PropTypes.bool.isRequired
// };

// Stateless functional component/ Presentational component
// Link the home url to the IndexRoute "/" which renders the HomePage component
// When this component is active, set a className of active
const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="about" activeClassName="active">About</Link>
      {" | "}
      <Link to="courses" activeClassName="active">Courses</Link>
      {loading ? <LoadingDots interval={100} dots={20} /> : null}
    </nav>
  );
};

export default Header;

// {loading && <LoadingDots interval={100} dots={20} />}
