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
            pantryList: ["Olive Oil", "Garlic", "White Wine", "Chicken Stock", "Parsley", "Oregano", "Salt", "Pepper"],
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
                        this.setState({ pantryList: [...this.state.pantryList, this.state.newItem] })
                        this.textInput.clear()
                    }} />
                {this.state.pantryList.map((items, index) => {
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
