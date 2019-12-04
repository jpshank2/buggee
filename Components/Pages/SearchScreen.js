import React, { Component } from 'react';
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import FilterMenu from '../Fragments/FilterMenu';

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            diet: "no",
            health: [],
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

    addHealth = e => {
        if (this.state.health.length === 0) {
            this.setState({ health: [e] })
        } else {
            this.setState({ health: [...this.state.health, e] })
        }
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
                            health: this.state.health
                        })
                    }} />

                <FilterMenu selectDiet={this.selectDiet} diet={this.state.diet} addHealth={this.addHealth} health={this.state.health} />

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate("Results", {
                            q: this.state.text,
                            diet: this.state.diet,
                            health: this.state.health
                        })
                    }}>
                    <Text>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ text: "", diet: "no", health: [] })
                    }}>
                    <Text>Clear Filters</Text>
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
