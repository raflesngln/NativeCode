import React from "react";
import {NavigatorIOS,ScrollView,RefreshControl,StyleSheet, Text, View,ActivityIndicator,Modal,TouchableHighlight, Alert} from 'react-native';
import { Container,Spinner ,Tab,Item,Input,Form,Label, Tabs, ScrollableTab,Body, Header,Left,Title,Button,Right, Content, Footer, FooterTab, Icon } from 'native-base';


const ContactItem = ({ name, phone, onClickDelete }) => (
  <View style={{flex:1}}>
    <Text>{name}</Text>
    <Text>{phone}</Text>
    <Button
      onPress={onPressDelete}
    >
      <Text>Delete</Text>
    </Button>
  </View>
);

export default ContactItem;