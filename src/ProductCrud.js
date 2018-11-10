import React, { Component } from "react";
import { Provider } from "react-redux";
import { connect } from "react-redux";

import {NavigatorIOS,ScrollView,RefreshControl,TextInput,StyleSheet, Text, View,ActivityIndicator,Modal,TouchableHighlight, Alert} from 'react-native';
import { Container,Spinner,Card,CardItem ,Tab,Item,Input,Form,Label, Tabs, ScrollableTab,Body, Header,Left,Title,Button,Right, Content, Footer, FooterTab, Icon } from 'native-base';

import ContactList from "./../component/contact/ContactList";
import ContactItem from "./../component/contact/ContactItem";
import { addContact, removeContact } from "./states/actions";

class ProductCrud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: ''
    };
  }

  render() {
    const { name, phone } = this.state;
    const { contacts, addNewContact, removeExistingContact } = this.props;

    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
        <TextInput
        style={{height: 40}}
        placeholder="name"
        value={name}
        onChangeText={(text) => this.setState({name: text})}
         />
         <TextInput
         style={{height: 40}}
         placeholder="phone"
         value={phone}
         onChangeText={(text) => this.setState({phone: text})}
          />

          <Button full onPress={() =>addNewContact({ name, phone })}>
            <Text style={styles.button}>Tambah kontak</Text>
          </Button>

        </View>


        <ScrollView>
          {contacts.map(contact => {
            return (
                  <Card
                  key={contact.id}
                  name={contact.name}
                  phone={contact.phone}
                  onPressDelete={() => removeExistingContact(contact.id)}
                  >
                  <CardItem>
                    <Body>
                      <Text>{contact.id}</Text>
                      <Text>{contact.name}</Text>
                      <Text>{contact.phone}</Text>
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
  addNewContact: contact => {
    dispatch(addContact(contact));
  },
  removeExistingContact: contactID => {
    dispatch(removeContact(contactID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Apps);





const styles = StyleSheet.create({
  button: {
    color:'#fff'
  },
});