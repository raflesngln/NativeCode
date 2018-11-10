import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {NavigatorIOS, TouchableOpacity,View, ActivityIndicator,AsyncStorage} from 'react-native';
import Modal from "react-native-modal";
import { Container, Header,Button, Content, List, ListItem,Title,Form, Item, Input, Label, Text, Icon, Left, Body, Right, Switch } from 'native-base';


  export default class MySetting extends Component {
    constructor(props) {
      super(props);
        this.state = {selected:0,isModalVisible: false};
    };
    static navigationOptions = {
        header:null,
      };
      _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

    render() {
      // const { selected } = this.state;
      return (
    //     <Container>
    //     <Header>
    //     <Body>
    //       <Title>Rafles Account</Title>
    //     </Body>
    //   </Header>
    //   <Content>
    //   <List>
    //     <ListItem selected={selected===0} onPress={()=>this.props.navigation.navigate('PasswordSetting')}>
    //       <Left>
    //         <Text>Akun</Text>
    //       </Left>
    //       <Right>
    //         <Icon name="arrow-forward" />
    //       </Right>
    //     </ListItem>
    //     <ListItem selected={selected===1} onPress={()=>this.setState({selected:1})}>
    //      <Left>
    //         <Text>Message</Text>
    //       </Left>
    //       <Right>
    //         <Icon name="arrow-forward" />
    //       </Right>
    //     </ListItem>
    //     <ListItem selected={selected===2} onPress={()=>this.setState({selected:2})}>
    //       <Left>
    //         <Text>Pusat Bantuan</Text>
    //       </Left>
    //       <Right>
    //         <Icon name="arrow-forward" />
    //       </Right>
    //     </ListItem>
    //     <ListItem selected={selected===3} onPress={()=>this.setState({selected:3})}>
    //       <Left>
    //         <Text>Syarat dan Ketentuan</Text>
    //       </Left>
    //       <Right>
    //         <Icon name="arrow-forward" />
    //       </Right>
    //     </ListItem>
    //     <ListItem onPress={this._signOutAsync}>
    //       <Left>
    //        <Icon name="ios-log-out" />
    //         <Text> &nbsp; Log Out</Text>
    //       </Left>
    //     </ListItem>
    //   </List>
    // </Content>
    //   </Container>
    <View style={{ flex: 1 }}>
    <TouchableOpacity onPress={this._toggleModal}>
      <Text>Show Modal</Text>
    </TouchableOpacity>
    <Modal isVisible={this.state.isModalVisible}
          backdropColor={"red"}
          backdropOpacity={1}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={1000}
          animationOutTiming={1000}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1000}
          swipeDirection="right"
    >
      <View style={{ flex: 1 }}>
        <Text>Hello!</Text>
        <TouchableOpacity onPress={this._toggleModal}>
          <Text>Hide me!</Text>
        </TouchableOpacity>

        <View>
        <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>

        </View>
      </View>
    </Modal>
  </View>
      );
    }
  }