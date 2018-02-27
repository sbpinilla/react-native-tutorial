/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  FlatList,
  ListView,
  TouchableOpacity 
} from 'react-native';

import ArtistBox from "./ArtistBox";
import { Actions } from 'react-native-router-flux';


export default class ArtistList extends Component {


    constructor (props){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        

        this.state = {
          dataSource: ds,
        };
    }

    // metodo que se ejecuata una vez termine de renderear la visat 
    componentDidMount(){

        this.updateDataSource (this,this.props.artists)
    }

    //Ejecutar algun codigo cuando las props se actualizan
    componentWillReceiveProps (newProps){

        if(newProps.artists != this.props.artists){
          
            this.updateDataSource(this,newProps.artists)
            /*this.setState({
                dataSource: this.state.dataSource.cloneWithRows(newProps.artists),
            });*/
        }
    }

    updateDataSource(contex,data) {
       
        contex.setState({
            dataSource: this.state.dataSource.cloneWithRows(data),
        });
        
    }

    handlePress(artist){
        
       // console.warn('artist',artist);

       Actions.artistDetail( {artist:artist} )

    }


    render() {
        
        return (

            <ListView
                enableEmptySections = {true}
                dataSource = {this.state.dataSource}
                renderRow = {(rowData)=> {
                return (
                    <TouchableOpacity 
                    onPress ={ () => this.handlePress(rowData)} >
                        <ArtistBox artist = {rowData}/>
                    </TouchableOpacity>
                )} }
            />
    /*
        <FlatList
            data ={this.props.artists}
            renderItem={({item}) => <ArtistBox artist = {item}/>}

        />
    */    
        /* <ScrollView>

        {
            Array(1000).fill(artist).map(artist => {

            return <ArtisBox artist = {artist}/>
            })
        }

        </ScrollView>*/

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
