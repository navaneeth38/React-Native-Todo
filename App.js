import React, { useState } from 'react';
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
  Keyboard,
  Alert,
  FlatList
} from 'react-native';

const App = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const [task, setTask] = useState('');
  const [click, setClick] = useState(false)
  const [taskItems, setTaskItems] = useState([]);

  const handlePress = () => {
    if (task === "") {
      Alert.alert("OOPS",
        "Nothing added in todo",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      )
    }
    else {
      Keyboard.dismiss();
      Alert.alert("created",
        "todo created and added",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      )
      setClick(true)
      setTaskItems([...taskItems, task])
      setTask("");
    }
    console.log(task, taskItems, Platform.OS);
  }

  const deleteTask = (index) => {

    let itemCopy = [...taskItems]
    itemCopy.splice(index, 1)
    if (itemCopy.length === 0) {
      setClick(false)
    }
    setTaskItems(itemCopy)
  }
  return (
    <View style={styles.container}>
      <Header />
      <View
        style={styles.contentContainerStyle}
        keyboardShouldPersistTaps="handled">
        {click && <View>
          <View style={styles.textwrapper}>
            <Text style={styles.textsection}>{date}</Text>
          </View>
          <View style={styles.item}>
            {/* write input displayed */}
            <FlatList
              data={taskItems}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => deleteTask(index)}>
                  <ToDoList text={item} />
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index}
              extraData={taskItems}
            />

          </View>

        </View>}


      </View>
      {/* writing */}
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writetextwrapper}>
          <TextInput style={styles.input} placeholder="Write task!" value={task} onChangeText={t => setTask(t)} />
          <TouchableOpacity onPress={() => handlePress()}>
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
  container: { flex: 1, backgroundColor: 'whitesmoke' },
  contentContainerStyle: {
    padding: 18,
    flex: 1,
  },
  textwrapper: { paddingLeft: 20, },
  textsection: { fontSize: 21, fontWeight: "bold" },
  item: {
    paddingTop: 5
    , margin: 10,
    height: 600
  },
  writetextwrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: 'gray',
    borderWidth: 1,
    width: 280,
    height: 50
  },
  addwrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addtext: {
    fontWeight: "bold",
    fontSize: 25
  },
});

export default App;
