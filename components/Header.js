import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return (
        
            <View style={styles.box}>
                <Text style={styles.header}>TODO APP</Text>
            </View>
        
    );
}

const styles = StyleSheet.create({
    header: {fontSize: 26,color: 'gray',fontWeight: '800', marginTop: 10},
    box:{width: '100%',height: 50, alignItems: 'center'}
  
})

export default Header;
