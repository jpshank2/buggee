import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            value: "Search for Recipes with a specific Ingredient"
        }
    }

    static navigationOptions = {
        title: "Search",
    }

    handleText = (e) => {
        this.setState({text: e.target.value})
    }
    
    render() {
        return (
            <View style={searchScreen.container}>
                <Text>Searchy searchy</Text>
                <TextInput 
                    style={searchScreen.input}
                    value={this.state.value}
                    onChangeText={this.handleText} />
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
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});
