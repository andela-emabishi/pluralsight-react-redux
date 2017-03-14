import React, {PropTypes} from 'react';
import  {Link, IndexLink} from 'react-router';

import LoadingDots from './LoadingDots';

// Header.propTypes = {
//   loading: PropTypes.bool.isRequired
// };

// Stateless functional component/ Presentational component
// Link the home url to the IndexRoute "/" which renders the HomePage component
// When this component is active, set a className of active
// The IndexLink is used in order to enable link text highlighting when the route is active
// This means that when React detects this link is currently being viewed, it will automatically apply the active class to the link.
// http://www.hackingwithreact.com/read/1/30/adding-react-router-breadcrumbs-with-link-and-indexlink

// We use indexLink when refering to a link to the indexRoute i.e. the route to the HomePage component <IndexRoute component={HomePage} />
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
