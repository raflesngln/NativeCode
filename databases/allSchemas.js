import Realm from 'realm';
export const TODOLIST_SCHEMA="TodoList";
export const TODO_SCHEMA="Todo";

//Define your models and their properties
export const TodoSchema={
    name:"TODO_SCHEMA",
    primaryKey:'id',
    properties:{
        id:'int', //primary key
        name:{type:'string',indexed:true},
        done:{type:'bool',default:false}
    }
}

//list for relation
export const TodoListSchema={
    name:"TODOLIST_SCHEMA",
    primaryKey:'id',
    properties:{
        id:'int', //primary key
        name:'string',
        creationDate:'date',
        todos:{type:'list',objectType:'TODO_SCHEMA'}
    }
}

//==================OPERATION OF SCHEMAS===================================
const databaseOptions={
    path:'todoList.realm',
    schema:[TodoListSchema,TodoSchema],
    schemaVersion:0, //optional
}
//function todo list
export const insertNewTodoList=newTodoList=>new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            realm.create(TODO_SCHEMA,newTodoList);
            resolve(newTodoList);
        })
    })
    .catch((error)=>reject(error));
});

//function update list
export const updateTodoList=todoList=>new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            let updatingTodoList=realm.objectForPrimaryKey(TODOLIST_SCHEMA,todoList.id);
            updatingTodoList.name=todoList.name;
            resolve();
        })
    })
    .catch((error)=>reject(error));
});
//function delete list
export const deleteTodoList=todoListId=>new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            let deletingTodoList=realm.objectForPrimaryKey(TODOLIST_SCHEMA,todoList.id);
            realm.delete(deletingTodoList);
            resolve();
        })
    })
    .catch((error)=>reject(error));
});

//function delete all list
export const deleteAllTodoList=()=>new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            let allTodoList=realm.object(TODO_SCHEMA);
            realm.delete(allTodoList);
            resolve();
        })
    })
    .catch((error)=>reject(error));
});
//function query all list
export const queryAllTodoList=()=>new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm=>{
        realm.write(()=>{
            let allTodoList=realm.object(TODO_SCHEMA);
            resolve(allTodoList);
        })
    })
    .catch((error)=>reject(error));
});

export default new Realm(databaseOptions);