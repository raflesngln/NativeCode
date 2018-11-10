import React, {Component} from 'react';
import {Platform,StyleSheet,Button, NavigatorIOS, Text, View} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Icon, Form } from 'native-base';
import {createStackNavigator} from 'react-navigation';
import MyAccount from './../component/akun/MyAccount';


class WhislistScreen extends Component {
  render() {
    return (
      <View>
        <Text>INI ProfileScreen</Text>
      </View>
    );
  }
}
class OrderScreen extends Component {
  render() {
    return (
      <View>
        <Text>INI AboutScreen</Text>
      </View>
    );
  }
}





const AkunNavigasi = createStackNavigator({
  Home: { screen: MyAccount },
  Whislist: { screen: WhislistScreen},
  Order: { screen: OrderScreen},
});

export default AkunNavigasi;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});