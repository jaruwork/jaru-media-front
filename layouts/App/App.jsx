import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

const Login = loadable(() => import('@pages/LogIn'));
const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login"/>
      <Route path="/login" component={Login}/>
      <Route path="/workspace" component={Workspace}/>
    </Switch>
  );
};

export default App;