import React from "react";
import {
  HashRouter,
  Route
} from 'react-router-dom';
import Main from "../main/Main";
import Dashboard from "../dashboard/Dashboard";

export default class App extends React.Component {

  render() {
    return(
      <HashRouter>
        <div>
          <Route exact path='/' component={Main } />
          <Route path='/dashboard' component={Dashboard} />
        </div>
      </HashRouter>
    );
  }
}


