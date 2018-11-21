import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Home from '../view/Home';

const HomeRoute = ({ match }) => (
  <React.Fragment>
    <Route exact path={match.path} component={Home} />
  </React.Fragment>
);

HomeRoute.propTypes = {
  match: PropTypes.object.isRequired,
};

export default HomeRoute;
