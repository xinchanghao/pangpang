import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
const { Footer } = Layout;
class Foot extends React.Component {

  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        Pangpang ©2018 Created by ChhXin
    </Footer>
    )
  }
}

export default connect((state) => {
  return {
    // addResult: state.getIn(['HomeReducer'])
  }
})(Foot)
