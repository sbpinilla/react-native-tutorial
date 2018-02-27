/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Platform,
  View,
} from 'react-native';


import {Scene,Router,Stack} from 'react-native-router-flux'
import HomeView from "./HomeView";
import ArtistDetailView from "./ArtistDetailView";

export default class App extends Component {
  
  render() {

    const isAndroid = Platform.OS === 'android';

    return (

      <Router>
      <Stack key="root">
        <Scene key="home" component={HomeView} hideNavBar = {true} />
        <Scene key="artistDetail" component={ArtistDetailView} hideNavBar = {isAndroid} />
      </Stack>
    </Router>
        
    );
  }
}



/*

Here are the details of your new API account.
Application name	App Sergio
API key	bb18cdc9044c763a4d756b5509d4e38e
Shared secret	b55347bef8cadcef0e4295098adaa57b
Registered to	lokomouch

*/