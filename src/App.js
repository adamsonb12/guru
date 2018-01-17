import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // Middleware

import { View } from 'react-native';

import Router from './Router';
import reducers from './reducers/index';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    let config = {
      apiKey: "AIzaSyDkzeLJtseSjCTF2q2me6gPws83v21UiDw",
      authDomain: "guru-b709e.firebaseapp.com",
      databaseURL: "https://guru-b709e.firebaseio.com",
      projectId: "guru-b709e",
      storageBucket: "guru-b709e.appspot.com",
      messagingSenderId: "916723909026"
    };
    firebase.initializeApp(config);
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk )); // Store enhancer

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;