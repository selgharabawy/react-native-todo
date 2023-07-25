import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={24} color="#1C282E" />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection:'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth:1,
        borderRadius: 10,
        backgroundColor:"#6A8595",
    },
    itemText: {
        marginLeft: 10,
    }
})