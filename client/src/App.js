import React, { Component } from 'react';
import {Router, Route, browserHistory} from 'react-router';
import TodoComponent from './components/TodoComponent';
import About from './components/About';

class App extends Component {
  render = () => {
    return(
      <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
        <Route path={'/about'} component={About}></Route>
      </Router>
    );
  }
}

export default App;
