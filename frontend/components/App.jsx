import React, {Component} from "react";
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './header/header_container';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <HeaderContainer />
        </header>
      </div>
    );
  }
}

export default App;
