import React, { Component } from 'react';
import axios from 'react-native-axios';
import qs from 'query-string';
import { CameraRoll,TextInput,Vibration,StyleSheet,Dimensions,StatusBar,TouchableHighlight,TouchableOpacity , View,ScrollView,RefreshControl, Platform, Text, FlatList, Alert, ActivityIndicator, Image } from 'react-native';
import {Body,Toast,Container,Left,Header,Right,Content,Card,CardItem,Thumbnail,Button,Fab,Icon,Form, Item, Input, Label } from 'native-base';
import { RNCamera ,Camera, FaceDetector } from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';


const options={
  title:'Upload Image',
  takePHotoBUttonTitle:'Take Photofrom Camera',
  chooseFromLibraryButtonTitle:'Choose Photo from Library',
  storageOptions:{
    skipBackup:true,
    path:'images'
  }
};


export default class CameraScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      avatarSource:null,
      uriFile:null,
      fileName:'',
      loading:false,
      showToast: false,

      id_produk:'',
      nm_produk:'',
      warna_produk:'',
      model_produk:'',
      merk_produk:'',
      bahan_produk:'',
      harga_produk:'',
      diskon_produk:'',
      stok_produk:'',
      ket_singkat:'',
      ket_produk:'',
      gambar_produk:'',
      ket_produk:'',
    }
  }
  static navigationOptions = {
    title: 'Add Data',
  };

myfunc=()=>{
  // alert('clik');
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } 
        // else if (response.customButton) {
        //   console.log('User tapped custom button: ', response.customButton);
        // } 
        else {
          // const source = { uri: response.uri };
          // You can also display the image using data:
          const source = { uri: 'data:image/jpeg;base64,' + response.data }; 
          // console.warn(`${response.latitude} and`)
          this.setState({
            avatarSource: {uri:response.uri},
            uriFile:response.uri,
            fileName:response.fileName
          });
        }
      });
};
makeid(){
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for( var i=0; i < 5; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

doUpload=()=>{
  // console.warn('loading');
  this.setState({loading:true});

        const url='http://149.129.214.176/barcode/tambahProductSample.php';
        const data = new FormData();
        // const arr={
        //                 id_produk: '8008',
        //                 nm_produk: 'hahahah',
        //                 photo:{uri:this.state.uriFile,type:'image/jpeg',name:'asasas'}
        //             }
        //             const data=JSON.stringify(arr); 
                    // in PHP $arr = json_decode($_POST['arr']);

              data.append('id_produk', this.state.id_produk);
              data.append('nm_produk', this.state.nm_produk);
              data.append('photo', {
                uri: this.state.uriFile,
                type: 'image/jpeg', // or photo.type
                name: this.state.fileName
              });
              
              fetch(url, {
                method: 'post',
                body: data
              })
              .then((response)=>response.json())
              .then((ResponseJson)=>{
                    console.warn(ResponseJson);
                    this.setState({loading:false})
                    Toast.show({text: 'Wrong password!',buttonText: 'Okay'})
              })
              .catch(function (error) {
                console.log(error);
              });
}

doUpload22=()=> {
  let API_URL = "http://149.129.214.176/barcode/tambahProductSample.php"
  let fileURL = this.state.uriFile;
  let picName = this.makeid() + '.jpg'

  let data = new FormData()
  if (fileURL) {
    data.append('file', {uri: fileURL, name: picName, type: 'image/jpg'})
  }
  const config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data; boundary=6ff46e0b6b5148d984f148b6542e5a5d',
      'Content-Language': 'en'
    },
    body: data,
  }
  return fetch(API_URL, config)
    .then(response => response.json().then(photo => ({photo, response})))
    .then(({photo, response}) => {
      if(!response.ok) {
        return Promise.reject(photo)
      } else {
        profileImage = photo.url 
      }
    }).catch(err => {
      console.log(err.message)
    })    

};

uploadData =()=> {
  const mydata =qs.stringify(
            {
            nm_produk: this.state.nm_produk,
            id_kategori: this.state.id_kategori,
            warna_produk: this.state.warna_produk,
            model_produk: this.state.model_produk,
            harga_produk: this.state.harga_produk,
            gambar_produk: this.state.gambar_produk,
            }
        );
  let axiosConfig = {
              headers: {
              'Content-Type': 'multipart/form-data;application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
              }};

        axios({
        method: 'post',
        url: `http://149.129.214.176/barcode/tambahProductSample.php`,
        data: mydata,axiosConfig
        })
        .then(function (response) {
            console.log(response);
                alert('berhasil');
                this.myalert;
        })
        .catch(function (error) {
            console.log(error)
        })   
};
testToast=()=>{
  Toast.show({text: 'Wrong password!',buttonText: 'Okay'});
}

  render(){
    return(
      <View style={{flex:1,flexDirection:'column',backgroundColor:'#fff',padding:4}}>
        <View style={{flex:1}}>
                
                <Label style={{textAlign:'center'}}>ADD DATA</Label>
                
                <Item fixedLabel>
                        <TextInput
                        style={{height: 40}}
                        placeholder="Number ID"
                        value={this.state.inputan}
                        onChangeText={(text) => this.setState({id_produk: text})}
                      />
                </Item>
                      <Item fixedLabel last>
                        <TextInput
                        style={{height: 40}}
                        placeholder="Name"
                        value={this.state.inputan}
                        onChangeText={(text) => this.setState({nm_produk: text})}
                      />
                </Item>
            <TouchableOpacity style={{backgroundColor:'#30a854',borderRadius:8,width:115,margin:10,padding:10}}
            onPress={this.myfunc}
            >
            <Text style={{color:'#fff', alignItems:'center'}}>Select Image</Text>
            </TouchableOpacity>
      </View>
      <View style={{flex:1}}>
              <Image source={this.state.avatarSource}
              style={{width:'90%',height:'90%',margin:10}}/>

      </View>
      <View style={{flex:1,padding:6}}>
      <Button onPress={() => Toast.show({
        text: 'Discard changes',
        buttonText: 'Undo',
        duration: 3000
      })}><Text>Toast</Text></Button>
              {
                (this.state.avatarSource) &&
                  <TouchableOpacity style={styles.btnsave}
                  onPress={this.doUpload}
                  >
                  <Label style={{textAlign:'center',color:'#fff'}}>Save Data</Label>
                  </TouchableOpacity>
              }
      </View>

      
      </View>
    )
  }
}
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#FFF',
    backgroundColor:'#FFF',
    marginBottom: 15,
  },
  cancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  },
  btnsave: {
    position:'absolute',
    bottom: 0,
    height:45,
    backgroundColor:'#e80b0b',
    justifyContent:'center',
    width: '100%'
  }
});
