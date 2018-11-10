import React,{Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'react-native-axios';
import {NavigatorIOS,ListItem,Image,ScrollView,RefreshControl,StyleSheet, Text, View,ActivityIndicator,Modal,TouchableHighlight, Alert} from 'react-native';
import { Container,Card,Spinner ,Tab,Item,Input,Form,Label, Tabs, ScrollableTab,Body, Header,Left,Title,Button,Right, Content, Footer, FooterTab, Icon } from 'native-base';



  export default class DetailProductScreen extends Component {
    constructor(props) {
      super(props);
        this.state = {
          isLoading:true,
          modalVisible: false,
          dataApi:[],
          refreshing: false,
          };
  };

  componentDidMount(){
    this.getData();
    };

    loadDetail=(item)=>{
      alert(item.Noid);
      // this.props.navigation.navigate('DetailJobs',{noid:item.Noid});
    }

  getData(){
    return axios.get('http://149.129.214.176/barcode/tampilReject.php')
      .then(response => {
      this.setState({ dataApi: response.data.result,isLoading: false });
      console.log(response.data.result);
      })
      .catch(function (error) {
      console.log(error);
      })
  };
  _onRefresh = () => {
    this.setState({dataApi:[],refreshing: true});
    this.getData().then(this.setState({refreshing:false}))
  };

    render() {
      return (
        <View style={{flex:1}}>
        <Text>detaillll</Text>
      </View>
      );
    }
  }






 const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ede3f2',
    padding: 100
 },
 modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5
 },
 text: {
    color: '#3f2949',
    marginTop: 10
 },
  header: {
    paddingTop:17,
    height:70
  },
  card: {
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingLeft:5,
    paddingBottom:10
  },
  content: {
    flex: 1,
    backgroundColor: '#eff1f2'
  },
  gridVertical:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-start'
  }
});