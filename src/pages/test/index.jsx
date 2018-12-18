import React from 'react';
import { connect } from 'react-redux';
import BaseComponent from 'utils/BaseComponent.jsx';
import testActions from 'actions/test.js';
import { bindActionCreators } from 'redux';

class Test extends BaseComponent {

  componentWillMount() {
    this.props.testActions.test({account: "1", pwd: "1"})
  }

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
}, dispatch => {
  return {
    testActions: bindActionCreators(testActions, dispatch)
  }
})(Test)
