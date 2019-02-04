import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Sorteio from '../view/Sorteio';

const SorteioRoute = ({ match }) => (
  <React.Fragment>
    <Route exact path={match.path} component={Sorteio} />
  </React.Fragment>
);

SorteioRoute.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SorteioRoute;
