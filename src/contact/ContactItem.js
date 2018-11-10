import React from "react";
import { Container,Text,Button,View ,Tab,Item,Input,Form,Label, Tabs, ScrollableTab,Body,Icon } from 'native-base';


const ContactItem = ({ name, phone, onClickDelete }) => (
  <View style={{flex:1}}>
    <Text>{name}</Text>
    <Text>{phone}</Text>
    <Button
      onPress={onClickDelete}
    >
      <Text>Delete</Text>
    </Button>
  </View>
);

export default ContactItem;