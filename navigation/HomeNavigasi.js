import React, {Component} from 'react';
import {Platform,StyleSheet,Button, NavigatorIOS, Text, View} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Icon, Form } from 'native-base';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../component/home/HomeScreen';
import DetailProductScreen from '../component/home/DetailProductScreen';

class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <Text>INI ProfileScreen</Text>
      </View>
    );
  }
}
class AboutScreen extends Component {
  render() {
    return (
      <View>
        <Text>INI AboutScreen</Text>
      </View>
    );
  }
}



const HomeNavigasi = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen},
  DetailProduct: { screen: DetailProductScreen},
});

export default HomeNavigasi;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});