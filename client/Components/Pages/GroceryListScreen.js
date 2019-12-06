import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class GroceryListScreen extends Component {
    static navigationOptions = {
        title: "Grocery List",
    }

    render() {
        return (
            <View style={groceryListScreen.container}>
                <Text>This is your Grocery List</Text>
            </View>
        )
    }
}

const groceryListScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
