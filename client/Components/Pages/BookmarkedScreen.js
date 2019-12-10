import React, { Component, Fragment } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';

import Heart from '../Fragments/Heart'

export default class BookmarkedScreen extends Component {
    static navigationOptions = {
        title: "Cookbook",
    }

    render() {
        return (
            <Fragment>
                <View style={bookmarkedScreen.container}>
                    <View style={bookmarkedScreen.searchContainer}>
                        <View style={bookmarkedScreen.searchBar}>
                            <View style={bookmarkedScreen.input}>
                                <TextInput placeholder='Search Your Recipes' style={{ fontSize: 15, paddingLeft: 15 }} />
                                <Icon name='search'></Icon>
                            </View>
                            <Text style={{ marginTop: 5 }}>These are your favorite recipes</Text>
                        </View>
                    </View>
                </View>

                <ScrollView>
                    <View 
                    style={bookmarkedScreen.recipeBG}
                    >

                        <View
                            style={bookmarkedScreen.recipe}
                        // key={recipe.recipe.uri}
                        >
                            <Image
                                style={bookmarkedScreen.image}
                                source={{ uri: 'https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg' }}
                            />
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "center"
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "column",
                                        opacity: 1,
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Text
                                        style={{
                                            textAlign: "center",
                                            fontSize: 22,
                                            fontWeight: "500",
                                            color: "#000",
                                            paddingLeft: 5,
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {`Chicken Vesuvio`}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.props.navigation.navigate("Recipe", {
                                                r: id
                                            });
                                        }}
                                    >
                                        <Text
                                            style={{
                                                textAlign: "center",
                                                fontSize: 20,
                                                fontWeight: "300",
                                                margin: 5,
                                                paddingLeft: 6
                                            }}
                                        >
                                            Details
                          </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                    <Heart />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Fragment >
        );
    }
}

const bookmarkedScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a0a0a0',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 100,
        marginBottom: 6,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "gray",
        shadowRadius: 1,
        shadowOpacity: 0.35
    },
    searchContainer: {
        flex: 1,
        alignSelf: 'center',
        
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
    },
    recipeBG: {
            flex: 1,
            backgroundColor: "#fff",
            alignContent: "center",
            justifyContent: "center",
            marginLeft: 14,
            marginRight: 8,
            display: "flex",
            flexWrap: "wrap",
            minWidth: "85%",
            maxWidth: "90%",
    },
    recipe: {
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#ddd",
        borderRadius: 15,
        padding: 2,
        marginBottom: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "gray",
        shadowRadius: 1,
        shadowOpacity: 0.2,
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "95%"
    },
    image: {
        width: 200,
        height: 200,
        maxWidth: 200,
        maxHeight: 200,
        alignSelf: "center",
        // margin: 5,
        // padding: 5,
        borderRadius: 15,
        opacity: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "gray",
        shadowRadius: 1,
        shadowOpacity: 0.35
    },
});
