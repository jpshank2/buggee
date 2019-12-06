import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class Heart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: false,
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    style={{flexDirection: "row", justifyContent: "space-evenly"}}
                    onPress={() => {
                        this.setState({ color: !this.state.color })
                    }} >
                    <Ionicons name={"ios-heart-empty"} size={40} color={this.state.color ? "red" : "black"} />
                    <Text style={{fontSize: 24}}>Favorite Recipe</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
