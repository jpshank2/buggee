import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
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
                <Text>Search for Recipes!</Text>
                <TextInput 
                    style={searchScreen.input}
                    value={this.state.text}
                    placeholder="Type here to search!"
                    onChangeText={text => this.setState({text})} />
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("Results" , {
                            q: this.state.text
                        })
                    }}>
                    <Text>Search</Text>
                </TouchableOpacity>
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
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 20
    }
});
