import React, {useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const generateID = () => {
    const timestamp = Date.now().toString(36);
    const randomNumber = Math.random().toString(36).substr(2, 5);
    const id = timestamp + '-' + randomNumber;
    return id;
  };

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: generateID() },
    { text: 'create an app', key: generateID() },
    { text: 'play on the switch', key: generateID() },
    { text: 'relax', key: generateID() }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos)=> {
      return prevTodos.filter(todo => todo.key !== key);
    });
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      item = {
        text:text,
        key: generateID()
      }
      setTodos([... todos, item]);
    } else{
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        {text:'Understood', onPress: () => console.log('alert closed')}
      ]);
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('keyboard dismissed')
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item})=> (
                <TodoItem
                item={item}
                pressHandler={pressHandler}
                />
                )}
                />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
    backgroundColor:"#A1AFBA"

  },
  list: {
    flex: 1,
    marginTop: 20,
    marginBottom:20
  },

});
