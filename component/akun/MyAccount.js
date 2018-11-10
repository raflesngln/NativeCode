import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {NavigatorIOS, View} from 'react-native';
import { Container, Header,Button, Content, List, ListItem,Title, Text, Icon, Left, Body, Right, Switch } from 'native-base';


  export default class MyAccount extends Component {
    static navigationOptions = {
        header:null,
      };

    render() {
      return (
        <Container>
        <Header>
        <Body>
          <Title>Rafles Account</Title>
        </Body>
      </Header>

        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="ios-cart" />
              </Button>
            </Left>
            <Body>
              <Text>Orders</Text>
            </Body>
            <Right>
              <Text>look</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="ios-chatbubbles" />
              </Button>
            </Left>
            <Body>
              <Text>Message</Text>
            </Body>
            <Right>
              <Text>20</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: "#007AFF" }}>
              <Icon active name="ios-heart" />
            </Button>
          </Left>
          <Body>
            <Text>Whislist</Text>
          </Body>
          <Right>
            <Text>20</Text>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>

        <ListItem icon>
        <Left>
          <Button style={{ backgroundColor: "#007AFF" }}>
            <Icon active name="ios-home" />
          </Button>
        </Left>
        <Body>
          <Text>Alamat</Text>
        </Body>
        <Right>
          <Text>2</Text>
          <Icon active name="arrow-forward" />
        </Right>
      </ListItem>

        </Content>
      </Container>
      );
    }
  }