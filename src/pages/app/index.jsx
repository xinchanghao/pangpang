import React from 'react';
import { connect } from 'react-redux';
import {  Route, Switch, NavLink } from 'react-router-dom';
import BaseComponent from 'utils/BaseComponent.jsx';
import { AsyncComponent } from 'utils/asyncComponent.jsx';
import './index.less';
import { Layout, Breadcrumb } from 'antd';
import Head from 'components/header';
import Side from 'components/sider';
import Foot from 'components/footer';

const { Content } = Layout;

class App extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <Layout>
        <Head />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Side />
            <Content style={{ padding: '0 24px', minHeight: 280 }}>

              <Switch>
                <Route path="/1" exact component={AsyncComponent("nav1")} />
                <Route path="/2" component={AsyncComponent("nav2")} />
                <Route path="/test" component={AsyncComponent("test")} />
              </Switch>

            </Content>
          </Layout>
        </Content>
        <Foot />
      </Layout>
    )
  }
}

export default connect((state) => {
  return {
    addResult: state.getIn(['HomeReducer'])
  }
})(App)
