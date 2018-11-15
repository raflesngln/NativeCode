/*
DIalog component for add/update  todo list
*/
import React,{Component} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,Platform,Image,TextInput } from 'react-native';
import PopupDialog, {SlideAnimation,DialogTitle} from 'react-native-popup-dialog';

// database
import { insertNewTodoList,updateTodoList } from './../../databases/allSchemas';
import { Title } from 'native-base';
import styles from 'react-native-swipe-out/styles';

export default class PopupDialogComponent extends Component{
    constructor(props) {
      super(props)
      this.state = {
         id:0,
         name:'',
         isAddNew:true
      };
    };
    render() {
        const {dialogTitle}=this.state;
        return (
            <PopupDialog
            dialogTitle={<DialogTitle title={dialogTitle}/>}
            width={0.7} height={180}
            ref={"popupDialog"}
            >
            <View style={styles.container}>
            
            </View>
                
            </PopupDialog>
        );
    }


    
}

const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})