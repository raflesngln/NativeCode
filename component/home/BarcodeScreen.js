import React, { Component } from 'react';
import axios from 'react-native-axios';
import qs from 'query-string';
import { CameraRoll,Vibration,StyleSheet,Dimensions,StatusBar,TouchableHighlight,TouchableOpacity , View,ScrollView,RefreshControl, Platform, Text, FlatList, Alert, ActivityIndicator, Image } from 'react-native';
import {Body,Container,Left,Header,Right,Content,Card,CardItem,Thumbnail,Button,Fab,Icon,Form, Item, Input, Label } from 'native-base';
import { RNCamera ,Camera, FaceDetector } from 'react-native-camera';




export default class BarcodeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {ratio:'16:9',scanning:true}
  };


  static navigationOptions = {
    title: 'Camera Actions',
  };
  
  toPasswordSet = () => {
    this.props.navigation.navigate('PasswordSetting');
  };
  
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
      console.warn(data);
    }
  };
  
  
  getMyBarcode(e){
    // Vibration.vibrate();
    this.setState({scanning: false});
    // Works on both iOS and Android
    Alert.alert(
      'Read Barcode',
      `Barcode catch ${e.data}`,
      [
      {text: 'Again', onPress: () => this.setState({scanning:true})},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        { cancelable: false }
      )

    // console.warn(e.data)
    // alert(e.data);
    
  }
  reloadCamera=()=>{
    this.setState({scanning: true});
  }
  render() {
    const MyCamera=()=>{
      return(
        <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style = {styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
        ratio="4:6"
        onBarCodeRead={this.getMyBarcode.bind(this)}
        />
    )
    }

    if(this.state.scanning) {
    return (
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:1, marginBottom:22}}>
              <Text>lorem isahskahs</Text>      
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <MyCamera/>
            </View>
            <View style={{flex:1, marginTop:90}}>
              <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
              
              <TouchableOpacity onPress={this.takePicture.bind(this)} style = {styles.capture}>
                  <Text style={{fontSize: 14}}> SHOOT</Text>
              </TouchableOpacity>
              
              </View>     
            </View>
      </View>

    );
    } else{
      return(
        <View>
        <TouchableOpacity onPress={this.reloadCamera} style = {styles.capture}>
            <Text style={{fontSize: 14}}> Reload </Text>
        </TouchableOpacity>
        </View>
      )
    }
  }
}

    








const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  // preview: {
  //   flex: 1,
  //   justifyContent: 'flex-end',
  //   alignItems: 'center'
  // },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height-250,
    width: Dimensions.get('window').width-250
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
