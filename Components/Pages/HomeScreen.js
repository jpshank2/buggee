import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home",
    }

    render() {
        return (
            <View style={homeScreen.container}>
                <ImageBackground source={require('../images/whitePlate.jpg')} style={homeScreen.headerImage}>
                    <Text style={homeScreen.headerText}>Buggee</Text>
                    <Text style={homeScreen.headerSubText}>From Recipe to Pantry</Text>
                </ImageBackground>
                <View style={homeScreen.iconContainer}>
                    <View>
                        <Image style={homeScreen.eachIcon} source={require('../images/cookBook.jpeg')}></Image>
                        <Text style={homeScreen.iconText}>Your Cookbook</Text>
                    </View>
                    <View>
                        <Image style={homeScreen.eachIcon} source={require('../images/magnifyingGlass.jpg')}></Image>
                        <Text style={homeScreen.iconText}>Search Recipes</Text>
                    </View>
                    <View>
                        <Image style={homeScreen.eachIcon} source={require('../images/shoppinglist2.png')}></Image>
                        <Text style={homeScreen.iconText}>Shopping List and Pantry</Text>
                    </View>
                    <View>
                        <Image style={homeScreen.eachIcon} source={require('../images/catProfile.jpg')}></Image>
                        <Text style={homeScreen.iconText}>Profile</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const homeScreen = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: 'red',
        borderBottomWidth: 2,
    },

    headerImage: {
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        flex: 1,
        borderBottomWidth: 3,
        borderBottomColor: 'red',

    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 27,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: '14%',
        color: 'white',
        fontFamily: 'ChalkboardSE-Bold'
    },

    headerSubText: {
        fontSize: 15,
        display: 'flex',
        fontWeight: '100',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'ChalkboardSE-Bold'
    },

    iconContainer: {
        flex: 2,
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: "center",
        flexDirection: 'row',
        alignContent: 'space-around',
        bottom: 10,
        // borderBottomColor: 'red',
        // borderBottomWidth: 3,
    },

    eachIcon: {
        width: 150,
        height: 150,
        borderRadius: 30,
    },

    iconText: {
        fontFamily: 'ChalkboardSE-Bold', 
        fontSize: 13,
        alignSelf: "center",
    }
});
