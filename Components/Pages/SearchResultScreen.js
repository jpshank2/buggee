//
// Result should include name, image, and time if available
// fix details on bottom
//

import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SearchResultScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            id: "",
            loading: true,
        }
    }

    static navigationOptions = {
        title: `Results`,
    }

    componentDidMount() {
        if (JSON.stringify(this.props.navigation.getParam("diet", "null")) == "") {
            let q = JSON.stringify(this.props.navigation.getParam("q", "null"));
            let fixedQ = q.substring(1, q.length - 1);
            fetch(`https://api.edamam.com/search?q=${fixedQ}&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c`)
                .then(res => res.json())
                .then(data => {
                    let recipes = data.hits.map(recipe => {
                        let uriArray = recipe.recipe.uri.split("");
                        let idArray = [];
                        for (let i = 0; i < uriArray.length; i++) {
                            if (uriArray[i] == "_") {
                                for (let k = i + 1; k < uriArray.length; k++) {
                                    idArray.push(uriArray[k]);
                                }
                            }
                        }
                        let id = idArray.join("");
                        return (
                            <View style={searchResultScreen.recipe} key={recipe.recipe.uri}>
                                <Image
                                    style={{ width: 150, height: 150 }}
                                    source={{ uri: recipe.recipe.image }}
                                />
                                <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "500" }}>{recipe.recipe.label}</Text>
                                <Text>{recipe.recipe.source}</Text>
                                <Text>{recipe.recipe.shareAs}</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate("Recipe", {
                                            r: id
                                        })
                                    }}>
                                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: "300" }}>Details</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                    this.setState({ recipes: recipes, loading: false })
                })
        } else {
            let q = JSON.stringify(this.props.navigation.getParam("q", "null"));
            let fixedQ = q.substring(1, q.length - 1);
            let diet = JSON.stringify(this.props.navigation.getParam("diet", "null"));
            let fixedDiet = diet.substring(1, diet.length - 1);
            fetch(`https://api.edamam.com/search?q=${fixedQ}&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c&diet=${fixedDiet}`)
                .then(res => res.json())
                .then(data => {
                    let recipes = data.hits.map(recipe => {
                        let uriArray = recipe.recipe.uri.split("");
                        let idArray = [];
                        for (let i = 0; i < uriArray.length; i++) {
                            if (uriArray[i] == "_") {
                                for (let k = i + 1; k < uriArray.length; k++) {
                                    idArray.push(uriArray[k]);
                                }
                            }
                        }
                        let id = idArray.join("");
                        return (
                            <View style={searchResultScreen.recipe} key={recipe.recipe.uri}>
                                <Image
                                    style={{ width: 150, height: 150 }}
                                    source={{ uri: recipe.recipe.image }}
                                />
                                <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "500" }}>{recipe.recipe.label}</Text>
                                <Text>{recipe.recipe.source}</Text>
                                <Text>{recipe.recipe.shareAs}</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate("Recipe", {
                                            r: id
                                        })
                                    }}>
                                    <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: "300" }}>Details</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                    this.setState({ recipes: recipes, loading: false })
                })
        }
    }

    render() {
        return (
            <View style={searchResultScreen.container}>
                <Text>Recipes Containing: {JSON.stringify(this.props.navigation.getParam("q", "null"))}</Text>
                <ScrollView>
                    {this.state.loading ? <Text style={searchResultScreen.loading}>Loading...</Text> : this.state.recipes}
                </ScrollView>
            </View>
        )
    }
}

const searchResultScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    recipe: {
        borderWidth: 0.5,
        borderColor: "black",
        margin: 10,
    },
    loading: {
        fontSize: 50
    }
});
