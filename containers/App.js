import React, { Component } from 'react';
import NotesApp from './NotesApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';

const redux = createRedux(stores);

export default class App extends Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => <NotesApp />}
      </Provider>
    );
  }
}
