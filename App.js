import {Provider} from 'mobx-react';
import React, {Component} from 'react';
import StackNavig from './src/Components/navigation/Index';
import NotesStore from './src/Components/store/NotesStore';

export default class App extends Component {
  render() {
    return (
      <Provider notesStore={NotesStore}>
        <StackNavig />
      </Provider>
    );
  }
}
