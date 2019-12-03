import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';


export default class RecipeResultScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            information: []
        }
    }

    componentDidMount() {
        fetch(`https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${this.props.navigation.getParam("r", "null")}&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c`)
            .then(res => res.json())
            .then(data => {
                let information = data.map((info) => {
                    let counter = 0;
                    let ingredients = info.ingredientLines.map(ingredient => {
                        counter++
                        return <Text key={counter}>{ingredient}</Text>
                    })
                    return (
                        <ScrollView key={info.url}>
                            <Image 
                                source={{uri: info.image}}
                                style={{height: 300, width: 300, alignItems: "center"}} /> 
                            <Text>{info.label}</Text>
                            {ingredients}
                        </ScrollView>
                    )
                })
                this.setState({information: information})
                console.log("worked")
            })
    }

    render() {
        return (
            this.state.information
        )
    }
}
