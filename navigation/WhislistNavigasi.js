import React, {Component} from 'react';
import {Platform,StyleSheet,Button, NavigatorIOS, Text, View} from 'react-native';
import { Container, Header,Card,CardItem,Right,Body, Content, Footer, FooterTab,Title, Icon, Form } from 'native-base';
import {createStackNavigator} from 'react-navigation';


class WhislistScreen extends Component {
  static navigationOptions = {
    header:null,
  };

  render() {
    return (
      <Container>
      <Header>
      <Body>
        <Title>Whislist</Title>
      </Body>
    </Header>
        <Content>
          <Card>
            <CardItem>
              <Icon active name="md-image" />
              <Text>ONE</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
             </CardItem>
           </Card>
           <Card>
           <CardItem>
             <Icon active name="md-image" />
             <Text>TWOO</Text>
             <Right>
               <Icon name="arrow-forward" />
             </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Icon active name="md-image" />
              <Text>THREE</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
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





const WhislistNavigasi = createStackNavigator({
  Home: { screen: WhislistScreen },
  Whislist: { screen: WhislistScreen},
  Order: { screen: OrderScreen},
});

export default WhislistNavigasi;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});