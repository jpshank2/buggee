//
// Result should include name, image, and time if available
//

import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

export default class SearchResultScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: []
        }
    }

    static navigationOptions = {
        title: "Results",
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
                            <Text style={{textAlign: "center", fontSize: 30, fontWeight: "500"}}>{recipe.recipe.label}</Text>
                            <Text>{recipe.recipe.source}</Text>
                            <Text>{recipe.recipe.shareAs}</Text>
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
