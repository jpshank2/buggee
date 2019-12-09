import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ShoppingList from '../Fragments/ShoppingList';

export default class ShoppingListScreen extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: "Shopping List",
    }

    render() {
        return (
            <View style={shoppingListScreen.container}>
                <Text>Your Shopping List:</Text>
                <ShoppingList addShoppingToPantry={this.props.navigation.getParam("addShoppingToPantry", "null")}
                    addShopping={this.props.navigation.getParam("addShopping", "null")} 
                    shoppingList={this.props.navigation.getParam("shoppingList", "null")}/>
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
        borderBottomColor: 'red',
        borderBottomWidth: 2,
    },
});
