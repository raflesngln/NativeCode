import React,{Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'react-native-axios';
import {NavigatorIOS,ScrollView,RefreshControl,StyleSheet, Text, View,ActivityIndicator,Modal,TouchableHighlight, Alert} from 'react-native';
import { Container,Spinner,Fab ,Tab,Item,Input,Form,Label, Tabs, ScrollableTab,Body, Header,Left,Title,Button,Right, Content, Footer, FooterTab, Icon } from 'native-base';
import ProductScreen1 from './ProductScreen1';
import DetailProductScreen from './DetailProductScreen';


  export default class HomeScreen extends Component {
    constructor(props) {
      super(props);
        this.state = {
          isLoading:true,
          dataApi:[],
          refreshing: false,
          nama:'rafles'
          };
  };
    static navigationOptions = {
      header:null,
    };
  componentDidMount(){
      this.setState({
        isLoading:false
      });
  };
  
  gotoBarcode=()=>{
    this.props.navigation.navigate('BarcodeGet');
  }
  gotoCamera=()=>{
    this.props.navigation.navigate('CameraGet');
  }
  toCamera=()=>{
    this.setState({nama:'nainggolan'});
    // console.warn('telah ubah jadi '+this.state.nama);
    // this.props.navigation.navigate('CameraGet');
  }


    render() {
              // TAB DATA
                const Tab1=()=>{
                    return (
                      <View style={{flex:1}}>
                          <ProductScreen1 changetoCamera={this.toCamera}/>
                          <View>

                          
                          <Fab
                            active={this.state.active}
                            direction="up"
                            containerStyle={{ }}
                            style={{ backgroundColor: '#d8024d' }}
                            position="bottomRight"
                            onPress={this.gotoBarcode}>
                            <Icon name="ios-barcode" />
                          </Fab>
                        </View>
                        <View>
                              <Fab
                              direction="up"
                              containerStyle={{bottom:80}}
                              style={{ backgroundColor: '#143e87' }}
                              position="bottomRight"
                              onPress={this.gotoCamera}>
                              <Icon name="ios-camera" />
                            </Fab>
                        </View>
                      </View>
                      );
                }
                const Tab2=()=>{
                  return (
                    <View>
                    <Text>dua</Text>
                    </View>
                    );
                }
                const Tab3=()=>{
                  return (
                    <View>
                    <Text>tiga</Text>
                    </View>
                    );
                }
                const Tab4=()=>{
                  return (
                    <View>
                    <Text>empat</Text>
                    </View>
                    );
                }
                const Tab5=()=>{
                  return (
                    <View>
                    <Text>lime</Text>
                    </View>
                    );
                }
      // Loading progress
      if(this.state.isLoading){
        return(
          <View style={{flex: 1, padding: 20,flex: 1,justifyContent: 'center',flexDirection: 'row',justifyContent: 'space-around'}}>
          <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
      }

      return (
            <Container>
            <Header searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
                <Icon name="ios-camera" size={35} color='green' />
              </Item>
              <Button transparent>
                <Text>Search</Text>
              </Button>
            </Header>

            <Tabs renderTabBar={()=> <ScrollableTab />}>
              <Tab heading="Shoes">
                <Tab1 />
              </Tab>
              <Tab heading="Phone">
                <Tab2 />
              </Tab>
              <Tab heading="Electronik">
                <Tab3 />
              </Tab>
              <Tab heading="Fashion">
                <Tab4 />
              </Tab>
              <Tab heading="Accesories">
                <Tab5 />
              </Tab>
            </Tabs>
          </Container>
      );
    }
  }




  const styles = StyleSheet.create ({
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
    }
 })