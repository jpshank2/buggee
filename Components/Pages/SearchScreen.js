import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FilterMenu from '../Fragments/FilterMenu';

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            diet: ""
        }
    }

    static navigationOptions = {
        title: "Search",
    }

    handleText = (e) => {
        this.setState({ text: e.target.value })
    }

    selectDiet = (e) => {
        this.setState({ diet: e })
    }

    render() {
        return (
            <View style={searchScreen.container}>
                <Text>Search for Recipes!</Text>
                <TextInput
                    style={searchScreen.input}
                    value={this.state.text}
                    placeholder="Type here to search!"
                    onChangeText={text => this.setState({ text })}
                    returnKeyType="go"
                    onSubmitEditing={() => {
                        this.props.navigation.navigate("Results", {
                            q: this.state.text,
                            diet: this.state.diet,
                        })
                    }} />

                <FilterMenu selectDiet={this.selectDiet} diet={this.state.diet} />

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("Results", {
                            q: this.state.text,
                            diet: this.state.diet
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
