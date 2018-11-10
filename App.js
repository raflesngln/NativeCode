import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RootNavigasi from './navigation/RootNavigator';




export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <RootNavigasi/>
    );
  }


}
