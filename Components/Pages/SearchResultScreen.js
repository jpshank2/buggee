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
            visible: 0
        }
    }

    static navigationOptions = {
        title: `Results`,
    }

    pickRecipe = (uri) => {
        console.log(uri);
        let uriArray = uri.split("");
        let idArray = []
        for (let i = 0; i < uriArray.length; i++) {
            if (uriArray[i] == "_") {
                for (let k = i+1; k < uriArray.length; k++) {
                    idArray.push(uriArray[k]);
                }
            }
        }
        this.setState({id: idArray.join(""), visible: 100});
    }

    componentDidMount() {
        fetch(`https://api.edamam.com/search?q=${JSON.stringify(this.props.navigation.getParam("q", "null"))}&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c`)
            .then(res => res.json())
            .then(data => {
                let recipes = data.hits.map(recipe => {
                    return (
                        <View style={searchResultScreen.recipe} key={recipe.recipe.uri}>
                            <Image
                                style={{width: 150, height: 150}}
                                source={{uri: recipe.recipe.image}}
                            />
                            <TouchableOpacity
                                onPress={() => this.pickRecipe(recipe.recipe.uri)}>
                                <Text style={{textAlign: "center", fontSize: 30, fontWeight: "500"}}>{recipe.recipe.label}</Text>
                            </TouchableOpacity>
                            <Text>{recipe.recipe.source}</Text>
                            <Text>{recipe.recipe.shareAs}</Text>
                            <TouchableOpacity
                                onPress={() => {this.props.navigation.navigate("Recipe", {
                                    r: this.state.id
                                })}}>
                                <Text style={{opacity: this.state.visible, textAlign: 'center', fontSize: 25, fontWeight: "300"}}>Details</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
                this.setState({recipes: recipes})
            })
    }

    render() {
        return (
            <View style={searchResultScreen.container}>
                <Text>Recipes Containing: {JSON.stringify(this.props.navigation.getParam("q", "null"))}</Text>
                <ScrollView>
                    {this.state.recipes}
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
    }
});
