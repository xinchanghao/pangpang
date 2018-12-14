import React from 'react';
import { Route } from 'react-router-dom';
import { AsyncComponent } from 'utils/asyncComponent.jsx';

export default class Login extends React.Component {

  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <h1>this is nav1</h1>
        <Route path={this.props.match.url + "/son"} component={AsyncComponent('Login/Son')} />
      </div>
    )
  }
}