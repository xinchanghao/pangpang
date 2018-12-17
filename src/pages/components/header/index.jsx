import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import Auth from 'utils/auth';
const { Header } = Layout;
import './style.less';

class Head extends React.Component {

  menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/dashboard">个人中心</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">退出</a>
      </Menu.Item>

    </Menu>
  );

  render() {
    return (
      <Header>
        <div className="header">
          <div className="header__logo" >PANGPANG</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/1" />nav1</Menu.Item>
            <Menu.Item key="2"><Link to="/2" />nav2</Menu.Item>
            <Menu.Item key="3"><Link to="/test" />test</Menu.Item>
          </Menu>
          <div className="header__right">
            {Auth.isLogin() ? <Dropdown overlay={this.menu} trigger={['click']}>
              <a className="ant-dropdown-link">
                {Auth.getUserContext().name}<Icon type="down" />
              </a>
            </Dropdown> :
              <a className="ant-dropdown-link" href="/login">登录</a>
            }

          </div>

        </div>
      </Header>
    )

  }
}

export default connect((state) => {
  return {
    // addResult: state.getIn(['HomeReducer'])
  }
})(Head)
