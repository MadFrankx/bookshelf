import React from "react";
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import Main from "../main/Main";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "../notFound/NotFound";
import Register from "../register/Register";
import RecoverPassword from "../recoverPassword/RecoverPassword";

export default class App extends React.Component {

  render() {
    return(
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Main } />
          <Route path='/dashboard/:username' component={Dashboard} />
          <Route path='/register' component={Register} />
          <Route path='/recover' component={RecoverPassword} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}


