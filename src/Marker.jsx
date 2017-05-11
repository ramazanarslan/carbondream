/* carbondream - Copyright 2016 Zeroarc Software, LLC
 *
 * Annotation marker shape
 */

'use strict';

import PropTypes from 'prop-types';

// External
import React from 'react';
import ClassNames from 'classnames';


const Marker = (props) => {
  const divStyle = {
    zIndex: props.priority,
  };

  const classes = ClassNames({
    'cd-marker': true,
    'deemphasize': props.deemphasize,
  });

  return (
    <div style={divStyle} className={classes}>
      <i className='fa fa-map-marker'></i>
    </div>
  );
};

Marker.propTypes = {
  deemphasize: PropTypes.bool.isRequired,
};

export default Marker;
