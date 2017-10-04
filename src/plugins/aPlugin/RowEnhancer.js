import React from 'react';
import { connect } from '../../utils/griddleConnect';
import { compose, mapProps } from 'recompose';

const EnhancedRow = OriginalComponent => compose(
  connect((state, props) => {
    return {
    };
  })
)(props => {
  return (
  	<div>
  	a
    <OriginalComponent {...props} />
    </div>
  );
});

export default EnhancedRow;