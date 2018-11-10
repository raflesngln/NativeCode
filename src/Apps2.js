import React, { Component } from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import {NavigatorIOS,ScrollView,RefreshControl,TextInput,StyleSheet, Text, View,ActivityIndicator,Modal,TouchableHighlight, Alert} from 'react-native';
import { Container,Spinner,Card,CardItem ,Tab,Item,Input,Form,Label, Tabs, ScrollableTab,Body, Header,Left,Title,Button,Right, Content, Footer, FooterTab, Icon } from 'native-base';

import { addContact, removeContact } from "./states/actions";

class Apps2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: ''
    };
  }

  render() {
    const { name, phone } = this.state;
    const { contacts, removeExistingContact } = this.props;

    return (
      <View style={{flex:1}}>

        <ScrollView>
          {contacts.map(item => {
            return (
                  <Card
                  key={item.id}
                  name={item.name}
                  phone={item.phone}
                  onPress={()=>detailContact(item.id)}
                  >
                  <CardItem>
                    <Body>
                      <Text>{item.id}</Text>
                      <Text>{item.name}</Text>
                      <Text>{item.phone}</Text>
                          <Icon name="ios-close"
                          onPress={()=>removeExistingContact(item.id)}
                          
                          />
                    </Body>
                  </CardItem>
                </Card>
            );
          })}
        </ScrollView>


      </View>
    );
  }
}

// Mengambil state dari store dan mempassing nya
// kedalam component App sebagai props
const mapStateToProps = ({ contacts }) => ({
  contacts
});

// Membuat fungsional yang membutuhkan fungsi dispatch
const mapDispatchToProps = dispatch => ({
  addNewContact: dataku => {
    dispatch(addContact(dataku));
  },
  removeExistingContact: nomorID => {
    dispatch(removeContact(nomorID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Apps2);





const styles = StyleSheet.create({
  button: {
    color:'#fff'
  },
});