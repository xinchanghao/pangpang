import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
const { Header } = Layout;
import {Link} from "react-router-dom"

class Head extends React.Component {

  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/1"/>nav1</Menu.Item>
          <Menu.Item key="2"><Link to="/2"/>nav2</Menu.Item>
          <Menu.Item key="3"><Link to="/test"/>test</Menu.Item>
        </Menu>
      </Header>
    )

  }
}

export default connect((state) => {
  return {
    // addResult: state.getIn(['HomeReducer'])
  }
})(Head)
