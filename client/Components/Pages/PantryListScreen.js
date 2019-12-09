import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import GroceryList from '../Fragments/PantryList';

export default class GroceryListScreen extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: "Pantry List",
    }

    render() {
        return (
            <View style={groceryListScreen.container}>
                <Text>Your Pantry List:</Text>
                <GroceryList 
                    removePantry={this.props.navigation.getParam("removePantry", "null")}
                    addPantry={this.props.navigation.getParam("addPantry", "null")} 
                    pantryList={this.props.navigation.getParam("pantryList", "null")}/>
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
        borderBottomColor: 'red',
        borderBottomWidth: 2,
    },
});
