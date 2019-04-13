import React, { Component } from 'react';
import RouteHandler from './RouterHandler';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <RouteHandler/>
      </div>
    );
  }
}

export default App;
