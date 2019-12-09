import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import GroceryList from '../Fragments/PantryList';

export default class PantryListScreen extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: "Pantry List",
    }

    render() {
        return (
            <View style={pantryListScreen.container}>
                <ImageBackground source={require('../images/whitePlate.jpg')} style={pantryListScreen.headerImage}>
                   
                        <Text style={pantryListScreen.title}>Your Pantry:</Text>
                         <View style={pantryListScreen.listContainerBackground}>
                        <GroceryList style={pantryListScreen.list}
                            removePantry={this.props.navigation.getParam("removePantry", "null")}
                            addPantry={this.props.navigation.getParam("addPantry", "null")}
                            pantryList={this.props.navigation.getParam("pantryList", "null")} />
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const pantryListScreen = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        // justifyContent: "center"
    },

    title: {
        flex: .5, 
        fontSize: 40,
        color: 'white',
        alignSelf: 'center',
        paddingTop: 30,
    },

    grocerylist: {
        color: 'white'
    },

    shoppinglist: {
        color: 'white'
    },

    list: {
        marginTop: 10,
    },

    listContainerBackground: {
        maxHeight: 300,
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 100,
        marginRight: 100,
        marginBottom: 100,
        borderRadius: 30,
        width: 200,
    },

    listContainer: {
        flex: 1,
        marginTop: 80,
    },

    headerImage: {
        width: '100%',
        display: 'flex',
        // textAlign: 'center',
        flex: 1.5,
        //borderBottomWidth: 3,
        borderBottomColor: 'red',
        //alignItems: "center",
        //justifyContent: "center"
    },
});
