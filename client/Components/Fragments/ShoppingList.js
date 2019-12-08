import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";

export default class ShoppingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: ""
        }
    }
    render() {
        return (
            <View>
                <Text>Add Item:</Text>
                <TextInput
                    ref={input => {this.textInput = input}}
                    placeholder="New Item"
                    onChangeText={newItem => this.setState({ newItem })}
                    onSubmitEditing={() => {
                        this.props.addShopping(this.state.newItem)
                        this.textInput.clear()
                    }} />
                {this.props.shoppingList.map((items, index) => {
                    return (
                        <View key={index}>
                            <Text>{items}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}
