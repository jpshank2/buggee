import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, FlatList, } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default class PantryListScreen extends Component {
    static navigationOptions = {
        title: "Grocery List",
    }

    render() {
        return (
            <View style={pantryScreen.container}>
                <ImageBackground source={require('../images/whitePlate.jpg')} style={pantryScreen.headerImage}>
                    <Text style={pantryScreen.headerText}>Your Pantry</Text>
                </ImageBackground>


                <View >
                    <View style={pantryScreen.itemsContainer}>
                        <FlatList 
                            data={[
                                { key: 'Olive Oil' },
                                { key: 'Garlic' },
                                { key: 'White Wine' },
                                { key: 'Chicken Stock' },
                                { key: 'Parsley' },
                                { key: 'Oregano' },
                                { key: 'Salt' },
                                { key: 'Pepper' },
                            ]}
                            renderItem={({ item }) => <View style={{flex: 1, flexDirection: 'row',}}><FontAwesome name={`minus`} size={11} style={{marginTop: 23}}/><Text style={pantryScreen.listText}>{item.key}</Text></View>}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const pantryScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 45,
        marginTop: 15,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 0,
        color: 'white',
        fontFamily: 'BradleyHandITCTT-Bold'
    },

    listText: {
        paddingRight: 100,
        marginTop:15,
        fontSize: 20,
        marginLeft: 4,
    },

    itemsContainer: {
        flex: 4,
        justifyContent:'center',
        alignSelf: 'center',
        borderRadius: 30,
        borderColor: 'red',
        borderWidth:2,
        margin: 4,
    },


});
