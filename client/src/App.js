import React from 'react';
import './App.css';
import ListClasses from './pages/list-classes'
import CreateClass from './pages/create-class'
import LandingPage from './pages/LandingPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory()
function App() {
  console.log('hello from the React app!')
  return (
    <Router history={history}>
      <Switch>
        <Route path="/language-classes">
          <ListClasses />
        </Route>
        <Route path="/create">
          <CreateClass />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
