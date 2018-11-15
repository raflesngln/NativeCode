import React,{Component} from 'react';
import {NavigatorIOS,FlatList,ScrollView,RefreshControl,StyleSheet, Text, View,ActivityIndicator,Modal,TouchableHighlight, Alert} from 'react-native';
import { updateTodoList,deleteTodoList,deleteAllTodoList, queryAllTodoList } from './../../databases/allSchemas';
import Swipeout from 'react-native-swipe-out';

let FlatListItem=props=>{
  const{itemIndex,id,name,creationDate,popupDialogComponent,onPressItem}=props;
  showEditModal=()=>{

  }
  showDeleteConfirmation=()=>{
        Alert.alert(
          'Delete',
          'Delete data',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: true }
        )
  }
  return(
    <Swipeout right={[
          {
            text:'edit',
            backgroundColor:'green',
            onPress=showEditModal
          },
          {
            text:'delete',
            backgroundColor:'red',
            onPress:showDeleteConfirmation
          }
        ]} autoClose={true}>
    </Swipeout>
  )
}

export default class TodoList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isLoading:true,
        todoLists:[]
        };
};
  static navigationOptions = {
    header:null,
  };

  reloadData=()=>{
    queryAllTodoList().then((todoLists)=>{
        this.setState({todoLists})
    })
    .catch(error=>{
      this.setState({todoLists:[]})
    })
    console.log('reloadData');
  }

  render() {
    this.render(
      <View style={StyleSheet.container}>
      <Text>TodoList</Text>
      <FlatList 
      style={StyleSheet.flatlist}
      data={this.state.todoLists}
      renderItem={({item,index})=><FlatListItem {...item} itemIndex={index}
                  popupDialogComponent={this.refs.popupDialogComponent}
                  onPress={()=>{alert('presss items')}}  />}
      keyExtractor={item=>item.id}
      />
      <popupDialogComponent ref={"popupDialogComponent"} />

      </View>
    )
  }


}

const style=StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent:'flex-start'
  },
  flatlist:{
    flex:1,
    flexDirection: 'column',
  }
})