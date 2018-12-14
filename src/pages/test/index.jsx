import React from 'react';
import { connect } from 'react-redux';
import BaseComponent from 'utils/BaseComponent.jsx';

class Test extends BaseComponent {

  render() {
    return (
      <h1>
        this is test
      </h1>
    )
  }
}

export default connect((state) => {
  return {
    // addResult: state.getIn(['HomeReducer'])
  }
})(Test)
