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

import Icon from 'react-native-vector-icons/Ionicons';

import ArtistList from "./ArtistList";
import {getArtists}  from "./ApiClient"; // se importa de esta manera ya que no es el export por defaultd


export default class App extends Component {
  
  state = {

    arr:[]

  }

  // ejecutar cuando el componente ya este renderiado 
  componentDidMount(){

    getArtists().then( data => this.setState( { arr:data}) );
  } 

  render() {
    
/*
    const artist = {
      imageT : "https://lastfm-img2.akamaized.net/i/u/174s/ed22a42245c941c190aca4b6cda19c0d.png",
      name : "The Beatles",
      like : 120 ,
      comment : 140,
    };

    const arr = Array(2).fill(artist);
*/
    const arr = this.state.arr;

    return (
      
      <View style = { [ styles.container ]} >
        <ArtistList artists = {arr}  />
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    paddingTop: 50,

  }

});


/*

Here are the details of your new API account.
Application name	App Sergio
API key	bb18cdc9044c763a4d756b5509d4e38e
Shared secret	b55347bef8cadcef0e4295098adaa57b
Registered to	lokomouch

*/