import React, { Component } from 'react';
import axios from 'react-native-axios';
import qs from 'query-string';
import { StyleSheet,TouchableHighlight,TouchableOpacity , View,ScrollView,RefreshControl, Platform, Text, FlatList, Alert, ActivityIndicator, Image } from 'react-native';
import {Body,Container,Left,Header,Right,Content,Card,CardItem,Thumbnail,Button,Fab,Icon,Form, Item, Input, Label } from 'native-base';
import Modal from "react-native-modal";



export default class ProductScreen1 extends Component{
    constructor(){
      super();
      this.state = { 
            GridColumnsValue: false,
            ButtonDefaultText: 'list',
            modalVisible: false,
            refreshing: false,
            isLoading: true,
            active: 'true',
            isModalVisible:false,
            detail:{
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
              update:'',
            },
            dataApi:[],
            dataSource:[]
     }
    }
    componentDidMount() {
      this.getData();
    }
    componentWillMount() {
        this.getData();
    
    }
    ChangeGridValueFunction =()=> {
        if(this.state.GridColumnsValue === true)
        {
            this.setState({
                GridColumnsValue: false,
                ButtonDefaultText : "list"
            })
        }
        else{
            this.setState({
                GridColumnsValue: true,
                ButtonDefaultText : "grid"
            })
        }
    }

  GetGridViewItem=(item)=>{
        // Alert.alert(item);
        this.props.navigation.navigate('BarcodeGet');
    }
  
  loadDetail=(item)=>{
         this.props.navigation.navigate('DetailProduct',{noid:item.Noid});
    }
  
  getData(){
      this.state.dataApi=[];
      return axios.get('http://149.129.214.176/barcode/tampilProduct.php')
      // .then(response => response.json())
        .then(responseJson => {
          this.setState({ dataApi: responseJson.data.result,isLoading: false });
          console.log(responseJson);
        })
        .catch(function (error) {
        console.log(error);
        })
    };
    getDataDetail(){
      return axios.get(`http://149.129.214.176/barcode/DetailProduct.php/`)
      // .then(response => response.json())
        .then(responseJson => {
          this.setState({ dataApi: responseJson.data.result,isLoading: false });
          console.log(responseJson);
        })
        .catch(function (error) {
        console.warn(error);
        });
    };
  _onRefresh = () => {
      this.setState({dataApi:[],refreshing: true});
      this.getData().then(this.setState({refreshing:false}))
    };
    changeTampilan=()=>{
      alert('hello wolrd');
    }
    gotoCamera=()=>{
      // this.props.navigation.navigate('BarcodeGet');
      this.props.changetoCamera();
    }
    _toggleModal = item =>{
       this.setState(
          {detail:item }
       )

      // alert(`Id produk adalah ${item.id_produk} dan nama produk adalah ${item.nm_produk}`)
      this.setState({ isModalVisible: !this.state.isModalVisible });
    } 
//==========================RENDER=================================
    render() {
  const items=this.state.detail;
        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator />
              </View>
            );
          }
      return (
          <View style={{flex:1,flexDirection:'column'}}>
          <View style={{flexDirection:'row',flex:0.5,justifyContent:'flex-end'}}>
                <TouchableOpacity
                activeOpacity = { 0.5 }
                style={{marginRight:10}}
                onPress={this.ChangeGridValueFunction} >
                <Icon name={`ios-${this.state.ButtonDefaultText}`}/>
                </TouchableOpacity>
          </View> 
          <View style={{flex:9,paddingLeft:4,paddingRight:4}}>
            <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh}
                  />
                }
                >
                  <FlatList
                    data={ this.state.dataApi }
                    renderItem={({item}) => 
                    <View style={{flex:1, marginLeft:3,marginRight:3,marginTop:8}}>
                    <TouchableOpacity onPress={()=>{this._toggleModal(item)}}>
                          <View style={{flex:1, flexDirection: 'column', margin:1}}> 
                          <Image style={styles.ImageComponentStyle} source={{ uri: `http://149.129.214.176/barcode/upload/${item.gambar_produk}` }} />
                          <Text onPress={()=>this.GetGridViewItem(item.nm_produk)} style={styles.ItemTextStyle} numberOfLines={1} >{item.nm_produk}</Text>
                          <Text style={{marginTop:-15, marginBottom:20, textAlign:'center',fontSize:24}}>{`Rp ${item.harga_produk}`}</Text>
                          </View>
                          </TouchableOpacity>
                    </View>
                          
                    }
                    numColumns = { this.state.GridColumnsValue ? 1 : 2 }
                    key = {( this.state.GridColumnsValue ) ? 'ONE COLUMN' : 'TWO COLUMN' }
                    keyExtractor={(item, index) => index.toString()}
                  />
                </ScrollView>
            </View>

   {/* MODAL DETAILS */}
   <Modal isVisible={this.state.isModalVisible}
          backdropColor={"#eff0f2"}
          backdropOpacity={1}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
          onSwipe={() => this.setState({ modalVisible: false })}
          swipeDirection="right"
          onBackButtonPress={() => this.setState({ modalVisible: false })}
    >


    <View style={{flex:1,flexDirection:'column'}}>
          <View style={{ flex: 0.5 }}>
            <TouchableOpacity onPress={this._toggleModal}>
              <Icon name="ios-arrow-round-back" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 10 }}>
                <ScrollView>
                <Image source={{uri:`http://149.129.214.176/barcode/upload/${items.gambar_produk}`}} style={{height: 200, width: '100%', flex: 1}}/>
                <Text style={{fontSize:28}}>{`${items.nm_produk}`}</Text>
                <Text style={{fontSize:28}}>{`${items.harga_produk}`}</Text>
                <Icon name="ios-paper-outline" />
                <Text style={{fontSize:14}}>{`${items.ket_produk}`}</Text>
                </ScrollView>
          </View>

          <View style={{ flex: 1 }}>
              <Button block style={styles.byButton}>
              <Text style={{color:'#fff'}}>BUY</Text>
              </Button>
          </View>
      </View>


    </Modal>
  </View>
              
      );
    }
   }
    
   const styles = StyleSheet.create({
   MainContainer :{
            justifyContent: 'center',
            flex:1,
            margin: 5,
            flexDirection: 'column',
            paddingTop: (Platform.OS) === 'ios' ? 20 : 0
   },
    
   ImageComponentStyle: {
     justifyContent: 'center',
     flex:1,
     alignItems: 'center',
     height: 200,
     backgroundColor: '#4CAF50'
    
   }
   ,
   ItemTextStyle: {
      color: '#000',
      padding: 10,
      fontSize: 18,
      textAlign: 'center',
      // backgroundColor: '#4CAF50',
      marginBottom: 5
      
    },

    ButtonStyle: {
        
           marginTop:10,
           paddingTop:15,
           paddingBottom:15,
           backgroundColor:'#FF9800',
           width: '100%',
           height: 50
         },
        
    ButtonInsideTextStyle:{
           color:'#fff',
           textAlign:'center',
    },
    byButton: {
      position:'absolute',
      bottom: 0,
      height:45,
      backgroundColor:'#e80b0b',
      justifyContent:'center',
      width: '100%'
    }
   });