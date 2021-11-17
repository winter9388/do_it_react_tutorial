import React from 'react';
import PropTypes from 'prop-types';

class PropsComponet extends React.Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

PropsComponet.propTypes = {
  name: PropTypes.string,
};

export default PropsComponet;
