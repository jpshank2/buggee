import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import GroceryList from '../Fragments/GroceryList';

export default class GroceryListScreen extends Component {
    static navigationOptions = {
        title: "Pantry List",
    }

    render() {
        return (
            <View style={groceryListScreen.container}>
                <Text>Your Pantry List:</Text>
                <GroceryList />
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
