import React, { Component, Fragment } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Heart from '../Fragments/Heart';

export default class SearchResultScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            id: "",
            loading: true,
            color: false,
        }
    }

    static navigationOptions = {
        title: `Results`,
    }

    componentDidMount() {
        if ((this.props.navigation.getParam("diet", "null") == "no") && (this.props.navigation.getParam("health", "null").length == 0)) {
            let q = JSON.stringify(this.props.navigation.getParam("q", "null"));
            let fixedQ = q.substring(1, q.length - 1);
            fetch(`https://api.edamam.com/search?q=${fixedQ}&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c`)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    let recipes = data.hits;
                    this.setState({ recipes: recipes, loading: false })
                })
                .catch(() => console.log("not empty"))
        } else if ((this.props.navigation.getParam("diet", "null") !== "no") && (this.props.navigation.getParam("health", "null").length == 0)) {
            let q = JSON.stringify(this.props.navigation.getParam("q", "null"));
            let fixedQ = q.substring(1, q.length - 1);
            let diet = JSON.stringify(this.props.navigation.getParam("diet", "null"));
            let fixedDiet = diet.substring(1, diet.length - 1);
            fetch(`https://api.edamam.com/search?q=${fixedQ}&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c&diet=${fixedDiet}`)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    let recipes = data.hits;
                    this.setState({ recipes: recipes, loading: false })
                })
                .catch(() => console.log("nope"))
        } else if ((this.props.navigation.getParam("diet", "null") !== "no") && (this.props.navigation.getParam("health", "null").length > 0)) {
            let q = JSON.stringify(this.props.navigation.getParam("q", "null"));
            let fixedQ = q.substring(1, q.length - 1);
            let diet = JSON.stringify(this.props.navigation.getParam("diet", "null"));
            let fixedDiet = diet.substring(1, diet.length - 1);
            let health = this.props.navigation.getParam("health", "null")
            let fixedHealth = health.join("&health=")
            fetch(`https://api.edamam.com/search?q=${fixedQ}&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c&diet=${fixedDiet}&health=${fixedHealth}`)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    let recipes = data.hits;
                    this.setState({ recipes: recipes, loading: false })
                })
                .catch(() => console.log("nope"))
        } else if ((this.props.navigation.getParam("diet", "null") == "no") && (this.props.navigation.getParam("health", "null").length > 0)) {
            let q = JSON.stringify(this.props.navigation.getParam("q", "null"));
            let fixedQ = q.substring(1, q.length - 1);
            let health = this.props.navigation.getParam("health", "null")
            let fixedHealth = health.join("&health=")
            fetch(`https://api.edamam.com/search?q=${fixedQ}&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c&health=${fixedHealth}`)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    let recipes = data.hits;
                    this.setState({ recipes: recipes, loading: false })
                })
                .catch(() => console.log("nope"))
        } else {
            alert("Something went wrong. Please try again")
        }
    }

    render() {
        return (
            <View style={searchResultScreen.container}>
                <Text style={searchResultScreen.showingText}>Showing results for: {JSON.stringify(this.props.navigation.getParam("q", "null"))}</Text>
                <ScrollView>
                    {this.state.loading ? <Text style={searchResultScreen.loading}>Loading...</Text> : this.state.recipes.map(recipe => {
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
                                    style={searchResultScreen.image}
                                    source={{ uri: recipe.recipe.image }}
                                />
                                <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "500" }}>{recipe.recipe.label}</Text>
                                <Heart />
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.navigation.navigate("Recipe", {
                                            r: id
                                        })
                                    }}>
                                    <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: "300" }}>Details</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
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
    showingText: {
        margin: 10,
        fontSize: 14,
        opacity: .7
    },
    image: {
        width: 300,
        height: 300,
        alignSelf: "center",
        margin: 5,
        borderRadius: 3
    },
    
    recipe: {
        borderWidth: 0.5,
        borderRadius: 15,
        borderColor: "black",
        padding: 2,
        marginBottom: 20,
    },

    loading: {
        fontSize: 25
    }
});
