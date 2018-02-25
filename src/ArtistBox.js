/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {

  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ArtisBox extends Component {
  
  render() {

    // pasar todos los datos de una vez a variables
    const {imageT,name,like,comment} = this.props.artist;

    /*
    // pasar dato a dato a las variables 
    const imageT = this.props.artist.imageT
    const name = this.props.artist.name
    const like = this.props.artist.like
    const comment = this.props.artist.comment
    */
    return (        
        
        <View style = { styles.artisBox } >
          
          <Image style ={ styles.image } source = {{uri:imageT}} /> 
         
          <View style = { styles.info} >
            
            <Text style = {styles.name} >{name}</Text>
            
            <View style = {styles.row}  >

              <View style = { styles.iconContainer } >  
                <Icon name="ios-heart-outline" size={30} color = "lightgray"  />
                <Text style = {styles.count} > {like}</Text>
              </View>
              
              <View style = { styles.iconContainer }>
                <Icon name="ios-chatboxes-outline" size={30} color = "lightgray"  />
                <Text style = {styles.count}   >{comment}</Text>
              </View>

            </View>

          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  artisBox:{
      margin: 5,
    flexDirection : 'row',
    backgroundColor : "#FFFFFF",
    // sombras en IOS    
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowOffset: { height:1,width:-2 },
    //sombras en android
    elevation: 2, 
},
  image :{
    
    width : 150,
    height : 150
  },
  info:{

    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name:{
    color: "#000",
    fontSize: 20,
    marginTop: 10,
  },
  row:{
    
    flexDirection: 'row',
    //justifyContent: 'space-between',
    marginHorizontal: 40 ,
    marginTop: 15,
  },
  iconContainer:{
    
    flex:1,
    alignItems: 'center',
  },
  count:{
    color:'gray'
  }

});
