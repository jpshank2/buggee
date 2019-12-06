import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class BookmarkedScreen extends Component {
    static navigationOptions = {
        title: "Cookbook",
    }

    render() {
        return (
            <View style={bookmarkedScreen.container}>
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
});
