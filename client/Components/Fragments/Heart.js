import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class Heart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fill: false,
            color: false
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    // style={{flexDirection: "row", justifyContent: "space-evenly"}}
                    onPress={() => {
                        this.setState({ fill: !this.state.fill })
                        this.setState({ color: !this.state.color })
                    }} >
                    <Ionicons 
                    name={this.state.fill ? `ios-heart` : `ios-heart-empty`} 
                    color={this.state.fill ? `red` : `#fff`}
                    size={36} 
                    style={{ justifyContent: "center", marginLeft: 25 }} />
                </TouchableOpacity>
            </View>
        )
    }
}
