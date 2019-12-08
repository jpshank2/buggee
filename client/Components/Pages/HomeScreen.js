import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home",
    }
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {

        return (
            <View style={homeScreen.container}>
                <ImageBackground source={require('../images/whitePlate.jpg')} style={homeScreen.headerImage}>
                    <Text style={homeScreen.headerText}>Buggee</Text>
                    <Text style={homeScreen.headerSubText}>From Recipe to Pantry</Text>
                </ImageBackground>

                <View style={homeScreen.iconContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Cookbook")
                        }}>
                        <Image style={homeScreen.eachIcon} source={require('../images/cookBook.jpeg')}></Image>
                        <Text style={homeScreen.iconText}>Your Cookbook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Search")
                        }}>
                        <Image style={homeScreen.eachIcon} source={require('../images/magnifyingGlass.jpg')}></Image>
                        <Text style={homeScreen.iconText}>Search Recipes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Lists")
                        }}>
                        <Image style={homeScreen.eachIcon} source={require('../images/shoppinglist2.png')}></Image>
                        <Text style={homeScreen.iconText}>Shopping List and Pantry</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("Profile")
                        }}>
                        <Image style={homeScreen.eachIcon} source={require('../images/catProfile.jpg')}></Image>
                        <Text style={homeScreen.iconText}>Profile</Text>
                    </TouchableOpacity>
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
        flex: 1.5,
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
        flex: 4,
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: "center",
        flexDirection: 'row',
        alignContent: 'space-around',
        paddingBottom: 10,
        // paddingTop: 7
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
    },


    
});
