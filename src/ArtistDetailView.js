/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import ArtistBox from "./ArtistBox";
import {getArtists}  from "./ApiClient"; // se importa de esta manera ya que no es el export por defaultd


export default class ArtistDetailView extends Component {
  
  render() {
    
    const artist = this.props.artist;

    return (
      
      <View style = { [ styles.container ]} >
        <ArtistBox artist = {artist}  />
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    paddingTop: 10,

  }

});


/*

Here are the details of your new API account.
Application name	App Sergio
API key	bb18cdc9044c763a4d756b5509d4e38e
Shared secret	b55347bef8cadcef0e4295098adaa57b
Registered to	lokomouch

*/