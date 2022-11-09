import React, {useState} from 'react';
import ToDoList from './components/ToDoList';
import Header from './components/Header'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';

const App = () => {
 const current = new Date();
 const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handlePress = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
    console.log(task,taskItems,Platform.OS);
  }

  const deleteTask=(index)=>{
    
    let itemCopy = [...taskItems]
    itemCopy.splice(index,1)
    setTaskItems(itemCopy)
  }
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
          <Header />
        <View style={styles.textwrapper}>
          <Text style={styles.textsection}>{date}</Text>
        </View>
        <View style={styles.item}>
          {/* write input displayed */}
         {
          taskItems.map((item,index) =>
            {return (<TouchableOpacity key={index} onPress={()=>deleteTask(index)}><ToDoList text={item} /></TouchableOpacity>)})
         }          
         
          
          
        </View>
      </ScrollView>
      {/* writing */}
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writetextwrapper}>
          <TextInput style={styles.input} placeholder="Write task!" value={task} onChangeText={t => setTask(t)}/>
          <TouchableOpacity onPress={()=>handlePress()}>
            <View style={styles.addwrapper}>
              <Text style={styles.addtext}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'whitesmoke'},
  textwrapper: {paddingTop: 80, paddingLeft: 20},
  textsection: {fontSize: 22, fontWeight: 'stronger'},
  item: {margin: 30},
  writetextwrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
  },
  addwrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addtext: {},
});

export default App;
