import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Container, Header,Left,Button,Right,Body,Title, Content, Footer,Item,Input, FooterTab, Icon } from 'native-base';
import { createStackNavigator, createSwitchNavigator,createBottomTabNavigator } from 'react-navigation';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './../component/home/HomeScreen';
import MySetting from './../component/akun/SettingsScreen';

class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Lots of features here',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button  onPress={()=>alert('helo')}>
        <Text>I'm done, sign me out</Text>
        </Button>
        <StatusBar barStyle="default" />
      </View>
    );
  }


}
class WhislistScreen extends React.Component {
  static navigationOptions = {
    title: 'WhislistScreen',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button  onPress={()=>alert('helo')}>
<Text>I'm done, sign me out</Text>
        </Button>
        <StatusBar barStyle="default" />
        <Text>WhislistScreen</Text>
      </View>
    );
  }

}
class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'CartScreen',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button  onPress={()=>alert('helo')}>
          <Text>I'm done, sign me out</Text>
        </Button>
        <StatusBar barStyle="default" />
        <Text>CartScreen</Text>
      </View>
    );
  }

}
class TransacScreen extends React.Component {
  static navigationOptions = {
    title: 'TransacScreen',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button  onPress={()=>alert('helo')}>
        <Text>I'm done, sign me out</Text>
        </Button>
        <StatusBar barStyle="default" />
        <Text>TransacScreen</Text>
      </View>
    );
  }
}
class CameraScreen extends Component {
  constructor(props) {
    super(props);
  };
  static navigationOptions = {
    title: 'Camera Action',
  };
  
  toPasswordSet = () => {
    this.props.navigation.navigate('PasswordSetting');
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Button  onPress={this.toPasswordSet}>
<Text>Password Settings</Text>
        </Button>
        <StatusBar barStyle="default" />
        <Text>CameraGet</Text>
        <Text>CameraGetCameraGetCameraGet</Text>
      </View>
    );
  }
}

const LogoTitle=()=>{
  return(
    <View>
    <Text>TITLE SETTING</Text>
    </View>
  )
}
class PasswordScreen extends React.Component {
  
  static navigationOptions = {
    title: 'PasswordScreen',
  };

  render() {
    return (
      <Container>
      <Header searchBar rounded>
      <Left>
      <Button transparent onPress={() => this.props.navigation.navigate('SettingNav')}>
        <Icon name='ios-arrow-round-back' />
      </Button>
    </Left>
      <Item>
        <Icon name="ios-search" />
        <Input placeholder="Search" />
        <Icon name="ios-camera" />
      </Item>
      <Button transparent>
        <Text>Search</Text>
      </Button>
    </Header>

        <Content padder>
        <View style={{flex:1}}>
        <StatusBar barStyle="default" />
        <Text>PasswordScreen</Text>
        <Button onPress={() => this.props.navigation.navigate('SettingNav')}>
        <Text>Go back from this HomeScreen</Text>
        </Button>
      </View>
        </Content>
      </Container>
    );
  }
}


class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('user');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}


    // COLLECTION OF NAVIGATORS
  const AppStack = createStackNavigator(
  {
    // Home: HomeScreen,
    HomeNav: { screen: HomeScreen },
    OtherNav: { screen: OtherScreen },
    CameraGet: { screen: CameraScreen },
  });
  const AuthStack = createStackNavigator(
    {
    SignIn: SignInScreen 
    });

  const WhislistStack = createStackNavigator(
    {
      WhislistNav: { screen: WhislistScreen },
      CartsNav: { screen: CartScreen },
    });
  const CartStack = createStackNavigator(
      {
      CartsNav: { screen: CartScreen },
    });
  const TransactionStack = createStackNavigator(
        {
      TransNav: { screen: TransacScreen },
    });
  const SettingsStack = createStackNavigator(
          {
      SettingNav: { screen: MySetting },
      PasswordSetNav: { screen: PasswordScreen },
    });
        
  const ButtonTabNavigator=createBottomTabNavigator(
    {
      Home: { screen: AppStack },
      Whislist: { screen: WhislistStack },
      Cart:{screen:CartStack},
      Trans:{screen:TransactionStack},
      Settings:{screen:SettingsStack}
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-apps${focused ? '' : '-outline'}` ;
          } else if (routeName === 'Whislist') {
            iconName = `ios-heart${focused ? '' : '-outline'}`;
          }
          else if (routeName === 'Cart') {
            iconName = `ios-cart${focused ? '' : '-outline'}`;
          }
          else if (routeName === 'Trans') {
            iconName = `ios-cash${focused ? '' : '-outline'}`;
          }
          else if (routeName === 'Settings') {
            iconName = `ios-cog${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      },
    }
  );

const RootNavigasi=createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: ButtonTabNavigator,
    SignUp:SignUpScreen,
    Auth: AuthStack,
    goCamera: { screen: CameraScreen },
    PasswordSetting: PasswordScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default RootNavigasi;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});