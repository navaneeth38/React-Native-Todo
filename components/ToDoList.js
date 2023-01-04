import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ToDoList = props => {
    const [valv,setValv]= useState(false)
    const item = props.text
    const deleteTask = () =>{
        setValv(true)
    }
  return (
    <View style={styles.items}>
      <View style={styles.itemleft}>
        <TouchableOpacity style={styles.square} onPress={deleteTask}></TouchableOpacity>
        <Text style={valv && {textDecorationLine: 'line-through'}}>{item}</Text>
      </View>
  
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    backgroundColor: 'white',
  
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  itemleft: {flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'},
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'skyblue',
    opacity: 0.5,
    marginRight: 12,
  },

  circular: { width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,},
});

export default ToDoList;
