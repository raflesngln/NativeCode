import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import { Container, Header, Content,Text, Footer, FooterTab, Button, Icon } from 'native-base';

import Apps from './../src/Apps';
import Apps2 from './../src/Apps2';
import Animations from './../component/templates2/Animations';
import LoginForm from './../navigation/LoginForm';

import HomeNavigasi from './HomeNavigasi';
import WhislistNavigasi from './WhislistNavigasi';
import AkunNavigasi from './AkunNavigasi';
import CartNavigasi from './CartNavigasi';
import TransaksiNavigasi from './TransaksiNavigasi';



export default class AppNavigasi extends Component {
  constructor(props) {
    super(props);
      this.state = {
        menuBottom:'HomeNavigasi',
        index:0,
        loginStatus:true
        };
};
  static navigationOptions = {
    header:null
  };
  changeMenuBottom=(item,idx)=>{
    this.setState({
      menuBottom:item,
      index:idx
    })
  }

  render() {
    const { index } = this.state;
    
    const MyFoot=()=>{
      return(
        <Footer>
        <FooterTab style={{backgroundColor:'#204782'}}>
          <Button style={styles.textBottomMenu}  active={index === 0} vertical onPress={()=>this.changeMenuBottom('HomeNavigasi',0)}>
            <Icon name="ios-analytics" />
            <Text active>Home</Text>
          </Button>
          <Button style={styles.textBottomMenu} active={index === 1} vertical onPress={()=>this.changeMenuBottom('WhislistNavigasi',1)}>
            <Icon name="ios-heart" />
            <Text>Whist</Text>
          </Button>
          <Button style={styles.textBottomMenu} active={index === 2} vertical onPress={()=>this.changeMenuBottom('CartNavigasi',2)}>
            <Icon name="cart" />
            <Text>Cart</Text>
          </Button>
          <Button style={styles.textBottomMenu} active={index === 3} vertical  onPress={()=>this.changeMenuBottom('TransaksiNavigasi',3)}>
            <Icon name="md-list-box" />
            <Text>Trans</Text>
          </Button>
          <Button style={styles.textBottomMenu} active={index === 4} vertical onPress={()=>this.changeMenuBottom('AkunNavigasi',4)}>
            <Icon name="ios-contact-outline" />
            <Text>Akun</Text>
          </Button>
        </FooterTab>
      </Footer>
      )
      }

    return (
      <View>
      {
        this.state.loginStatus == true?
        <LoginForm/>
        :
      <Container>

        <View style={{flex:1}}>
        {
          (this.state.menuBottom=='HomeNavigasi') 
          && 
          <View style={{flex:1}}><Apps/></View>
        }
        {
          (this.state.menuBottom=='WhislistNavigasi') 
          && 
          <View style={{flex:1}}><Apps2/></View>
        }
        {
          (this.state.menuBottom=='AkunNavigasi') 
          && 
          <View style={{flex:1}}><AkunNavigasi/></View>
        }
        {
          (this.state.menuBottom=='CartNavigasi') && <View style={{flex:1}}><CartNavigasi/></View>
        }
        {
          (this.state.menuBottom=='TransaksiNavigasi') && <View style={{flex:1}}><TransaksiNavigasi/></View>
        }

       </View>

      
        <MyFoot/>

      </Container>
      }

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textBottomMenu:{
    fontSize:8,
    textTransform:'uppercase'
  }
});
