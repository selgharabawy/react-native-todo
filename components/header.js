import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>my Todos</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        height: 90,
        paddingTop: 45,
        backgroundColor: '#1C282E'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }

})