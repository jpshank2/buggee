import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TextInput } from 'react-native'
import { SearchBar, Icon } from 'react-native-elements';

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
                    <View style={homeScreen.profile}>
                        <Image source={require('../images/profilePic.jpg')} style={homeScreen.profilePicture} />    
                    </View> 
                    <Text style={homeScreen.headerText}>Buggee</Text>
                    <Text style={homeScreen.headerSubText}>From Recipe to Pantry</Text>
                </ImageBackground>

                <View style={homeScreen.searchContainer}>
                    <View style={homeScreen.searchBar}>
                        <View style={homeScreen.input}>
                            <Icon name='search' stye={{ paddingLeft: 10 }}></Icon>
                            <TextInput placeholder='Search Your Recipes' style={{ fontSize: 15, paddingLeft: 15 }} />
                        </View>
                    </View>
                </View>



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
        flex: 1.5,
        borderBottomWidth: 3,
        borderBottomColor: 'red',
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 38,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 0,
        color: 'white',
        fontFamily: 'BradleyHandITCTT-Bold'
    },

    headerSubText: {
        fontSize: 20,
        display: 'flex',
        fontWeight: '100',
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'BradleyHandITCTT-Bold'
    },

    iconContainer: {
        flex: 4,
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: "center",
        flexDirection: 'row',
        alignContent: 'space-around',
        paddingBottom: 10,
    },

    eachIcon: {
        width: 150,
        height: 150,
        borderRadius: 30,
    },

    iconText: {
        fontWeight: 'bold',
        fontSize: 13,
        alignSelf: "center",
    },


    searchContainer: {
        flex: 1,
        marginTop: 131,
        position: 'absolute',
        alignSelf: 'center'
    },

    searchBar: {
        height: 40,
        flex: 1,
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
    },

    
    profile: {
        flex: .5
    },
   

    profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: 'red',
        borderWidth: 1.5,
        marginLeft: 5,
        marginTop: 5
    }
    
});
