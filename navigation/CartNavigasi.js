import React, {Component} from 'react';
import {Platform,StyleSheet,Button, NavigatorIOS, View} from 'react-native';
import { Card, CardItem, Text,Container, Header,Body, Content, Footer, FooterTab,Title, Icon, Form } from 'native-base';
import {createStackNavigator} from 'react-navigation';



class CartScreen extends Component {
  static navigationOptions = {
    header:null,
  };

  render() {
    return (
      <Container>
      <Header>
      <Body>
        <Title>Cart</Title>
      </Body>
    </Header>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Celana</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Details</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Laptop</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Details</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text>Xiaomi</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Details</Text>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}
class OrderScreen extends Component {
  render() {
    return (
      <View>
        <Text>INI AboutScreen</Text>
      </View>
    );
  }
}





const CartNavigasi = createStackNavigator({
  Home: { screen: CartScreen },
  Whislist: { screen: CartScreen},
  Order: { screen: OrderScreen},
});

export default CartNavigasi;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});