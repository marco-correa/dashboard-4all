import React, { Component } from 'react';

import Widget from './componentes/Widget';
import PageViews from './componentes/PageViews';
import Chat from './componentes/Chat';

import 'bootstrap/dist/css/bootstrap.css';
import './css/common.css';

export default class App extends Component {
  render() {
    return (
      <main>
        <h1>Dashboard</h1>
      
        <Widget />
        <PageViews />
        <Chat />
        
      </main>
    );
  }
}