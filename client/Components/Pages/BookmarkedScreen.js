import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';

export default class BookmarkedScreen extends Component {
    static navigationOptions = {
        title: "Cookbook",
    }

    render() {
        return (
            <View style={bookmarkedScreen.container}>
                <View style={bookmarkedScreen.searchContainer}>
                    <View style={bookmarkedScreen.searchBar}>
                        <View style={bookmarkedScreen.input}>
                            <TextInput placeholder='Search Your Recipes' style={{ fontSize: 15, paddingLeft: 15 }} />
                            <Icon name='search'></Icon>
                        </View>
                    </View>
                </View>
                <Text>These are your favorite recipes</Text>
            </View>
        )
    }
}

const bookmarkedScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchContainer: {
        flex: 1,
        alignSelf: 'center'
    },

    searchBar: {
        height: 40,
        margin: 20,
        backgroundColor: 'red',
        paddingHorizontal: 5,
        width: 230,
        borderTopColor: 'red',
        borderTopWidth: 2.5,
        borderRadius: 20,
    },

    input: {
        borderRadius: 20,
        height: 35,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
    }
});
