import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent2 extends React.Component {
  render() {
    const { objValue, requiredStringValue } = this.props;
    return (
      <div>
        <div>객체값: {String(Object.entries(objValue))}</div>
        <div>필수값: {requiredStringValue}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  objValue: PropTypes.shape({
    //객체의 자료형은 shape를 이용하여 정의한다.
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  //필수 프로퍼티 지정
  requiredStringValue: PropTypes.string.isRequired,
};

export default ChildComponent2;
