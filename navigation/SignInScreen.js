
import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import { Container,Button,TouchableHighlight,Badge, TextInput, Header, Content, Form, Item, Input, Label,Left,Right } from 'native-base';

export default class SignInScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // mylist: [1,2,3,4,6,5,5,3,5,7],
      username:'',
      password:''
    };
  };

  static navigationOptions = {
    header:null,
  };

  render() {
    return (
        <View style={styles.container}>
        <ImageBackground 
        blurRadius={5}
        resizeMode='cover'
        source={require('./../assets/bg1.jpg')}
        style={{
          flex:1,
          height: '100%',
          width: '100%',
          top: 0,
          left: 0
        }}
      >

      <View style={styles.content}>
        <View>
        <Image
            style={{width: 70, height: 65}}
            source={require('./../assets/icon22.png')}
          />
          <Text style={{marginLeft:'30%',marginTop:'-15%',marginBottom:'15%',fontSize:28,color:'#cca89b'}}>ATT GROUP</Text>
          <Text style={{marginLeft:'36%',color:'#c4b8b8'}}>LOGIN</Text>
          </View>

          <Form>
          <Item>
            <Input
            placeholderTextColor="#9c9fa3"
            style={styles.input}
            onChangeText={(text)=>this.setState({username:text})}
            placeholder="Username" />
            
          </Item><Item>

          </Item>
          <Item>
          <Input 
          placeholderTextColor="#9c9fa3" 
          style={styles.input}
          onChangeText={(text)=>this.setState({password:text})}
          placeholder="Password" />
        </Item>

          <Text>&nbsp;</Text>
          <Button 
          onPress={this._signInAsync}
          block info style={{width:'80%',marginLeft:'10%',borderRadius:25}}>
          <Text>LOGIN </Text>
        </Button>
        </Form>
    
    <View style={{marginTop:20,flex:1,flexDirection:'row',justifyContent:'space-between'}}>
      <Button transparent primary onPress={()=>this.props.navigation.navigate('SignUp')}>
      <Text style={{color:'#f4cbe9'}}>NEW User ?</Text>
      </Button>

    <Text style={{color:'#bc0309'}}>Forgot Password ?</Text>
    </View>
        
      </View>

      </ImageBackground>


        </View>
    );
  }

  _signInAsync = async () => {
    let usr = this.state.username;
    let pass = this.state.password;
    if (usr === '' || pass=='') {
      Alert.alert(
            'Alert !',
            'You must Fill up completly',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]
          )
    } else{
        let data = {
          id:1,
          username: usr,
          password: pass
          }
      await AsyncStorage.setItem('user', JSON.stringify(data));
      // await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    }


  };
}

  const styles = StyleSheet.create({
    input: {
      color:'#fff'
    },
    container: {
      width: '100%',
      height: '100%',
      flex: 1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems: 'center'
    },
    content:{
      paddingTop:'25%',
      padding:9,
      paddingLeft:35,
      paddingRight:35,
      borderRadius:5,
      height:'100%',
      width:'100%',
      // backgroundColor: 'rgba(5, 28, 72, 0.7)'
    }
  });