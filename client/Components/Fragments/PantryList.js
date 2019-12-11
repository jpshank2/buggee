import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons.js";

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
                <Text style={{ color: 'white', fontSize: 22 }}>Add Item:</Text>
                <TextInput style={{ color: 'white', borderColor: 'white', borderWidth: .5, borderRadius: 20, fontSize: 18 }}
                    ref={input => { this.textInput = input }}
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
                                <Text style={{ color: 'white', fontSize: 19 }}>
                                    <Ionicons name='ios-trash' size={20} />
                                    {items}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        )
    }
}
