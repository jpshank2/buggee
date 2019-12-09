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
                <Text style={{color:'white', fontSize: 22}}>Add Item:</Text>
                <TextInput style={{color:'white', borderColor: 'white', borderWidth: .5, borderRadius: 20, fontSize: 18}}
                    ref={input => { this.textInput = input }}
                    placeholder="New Item"
                    onChangeText={newItem => this.setState({ newItem })}
                    onSubmitEditing={() => {
                        this.props.addShopping(this.state.newItem)
                        this.textInput.clear()
                    }} />
                {this.props.shoppingList.map((items, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.addShoppingToPantry(items)
                                }}
                                onLongPress={() => {
                                    this.props.removeShopping(items)
                                    alert(`You removed ${items} from your shopping list!`)
                                }}>
                                <Text style={{color: 'white', fontSize: 16}}>{items}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        )
    }
}
