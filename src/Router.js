import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { AsyncComponent } from 'utils/asyncComponent'

class AppRoute extends Component {
  render() {
    return (
      <div className="pangpang-app-dom">
        <Switch>
          <Route exact path="/login" component={AsyncComponent('dashboard')} />
          <Route path="/" component={AsyncComponent('app')} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
export default AppRoute;
