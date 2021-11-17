import React from 'react';
import propTypes from 'prop-types';

class ChildProperty extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

ChildProperty.propTypes = {
  children: propTypes.node,
};

export default ChildProperty;
