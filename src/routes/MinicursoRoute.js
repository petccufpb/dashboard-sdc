import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Minicurso from '../view/Minicurso';

const MinicursoRoute = ({ match }) => (
  <React.Fragment>
    <Route exact path={match.path} component={Minicurso} />
  </React.Fragment>
);

MinicursoRoute.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MinicursoRoute;
