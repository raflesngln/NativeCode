import React,{Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'react-native-axios';
import {NavigatorIOS,ScrollView,RefreshControl,StyleSheet, Text, View,ActivityIndicator,Modal,TouchableHighlight, Alert} from 'react-native';
import { Container,Spinner,Fab ,Tab,Item,Input,Form,Label, Tabs, ScrollableTab,Body, Header,Left,Title,Button,Right, Content, Footer, FooterTab, Icon } from 'native-base';
import Realm from 'realm';

// Define your models and their properties
const CarSchema = {
  name: 'Car',
  properties: {
    make:  'string',
    model: 'string',
    miles: {type: 'int', default: 0},
  }
};
const PersonSchema = {
  name: 'Person',
  properties: {
    name:     'string',
    birthday: 'date',
    cars:     'Car[]',
    picture:  'data?' // optional property
  }
};

// Realm.open({schema: [CarSchema, PersonSchema]})
//   .then(realm => {
//     // Create Realm objects and write to local storage
//     realm.write(() => {
//       const myCar = realm.create('Car', {
//         make: 'Hondazz',
//         model: 'Civics',
//         miles: 1000,
//       });
//       myCar.miles += 20; // Update a property value
//     });
    
  export default class WhislistScreen extends Component {
    constructor(props) {
      super(props);
      this.state = { realm: null,isLoading:false, };
  };
  static navigationOptions = {
    header:null,
  };
  componentWillMount() {
    // Realm.open({
    //   schema: [{name: 'Handphone', properties: {name: 'string'}}]
    // }).then(realm => {
    //   realm.write(() => {
    //     realm.create('Handphone', {name: 'avanza'});
    //   });
    //   this.setState({ realm });
    // });
    // console.warn(this.state.realm);
  }
sfdfdfdfdf
  render() {
    // const info = this.state.realm
    //   ? 'Number of Handphone in this Realm: ' + this.state.realm.objects('Handphone').length
    //   : 'Loading...';

    return (
      <View style={styles.container}>
       
        <Text>Hello</Text>
         { /* {info}  */}
        
      </View>
    );
  }
}




  const styles = StyleSheet.create ({
    container: {
       alignItems: 'center',
       backgroundColor: '#fff',
       padding: 100
    },
    modal: {
       flex: 1,
       alignItems: 'center',
       backgroundColor: '#fff',
       padding: 5
    },
    text: {
       color: '#3f2949',
       marginTop: 10
    },
    welcome:{
      flex:1
    }
 })