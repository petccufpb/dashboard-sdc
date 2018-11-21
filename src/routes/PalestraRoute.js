import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Palestra from '../view/Palestra';

const PalestrasRoute = ({ match }) => (
  <React.Fragment>
    <Route exact path={match.path} component={Palestra} />
    {/* <Route path={`${match.path}/add`} component={} />
    <Route path={`${match.path}/edit`} component={} /> */}
  </React.Fragment>
);

PalestrasRoute.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PalestrasRoute;
