import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class SearchScreen extends Component {
    static navigationOptions = {
        title: "Search",
    }
    
    render() {
        return (
            <View style={searchScreen.container}>
                <Text>Searchy searchy</Text>
            </View>
        )
    }
}

const searchScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

