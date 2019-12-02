import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class ShoppingListScreen extends Component {
    static navigationOptions = {
        title: "Shopping List",
    }

    render() {
        return (
            <View style={shoppingListScreen.container}>
                <Text>This is your Shopping List</Text>
            </View>
        )
    }
}

const shoppingListScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
