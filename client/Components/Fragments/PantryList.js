import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";

export default class GroceryList extends Component {
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
                        this.props.addPantry(this.state.newItem)
                        this.textInput.clear()
                    }} />
                {this.props.pantryList.map((items, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity
                                onLongPress={() => {
                                    this.props.removePantry(items)
                                    alert(`You removed ${items} from your pantry list!`)
                                }}>
                            <Text>{items}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        )
    }
}
