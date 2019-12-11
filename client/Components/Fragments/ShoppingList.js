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

export default class ShoppingList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: ""
        }
    }

    // componentDidMount() {
    //     fetch("http://localhost:5000/api/add-item-here")
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             let shoppingList = data.hits
    //             this.setState({ shoppingList: shoppingList })
    //         })
    // }

    render() {
        return (
            <View>
                <Text style={{color:'white', fontSize: 22}}>Add Item:</Text>
                <TextInput style={{width: 200, paddingLeft: 8, color:'white', marginBottom: 5, borderColor: 'white', borderWidth: .5, borderRadius: 20, fontSize: 18}}
                    ref={input => { this.textInput = input }}
                    placeholder="New Item"
                    placeholderTextColor="white"
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
                                <Text style={{color: 'white', fontSize: 19, maxWidth: "90%"}}>
                                   <Ionicons name='ios-trash'size={20} style={{marginRight: 5}} />
                                {items}
                                 <Ionicons name='ios-checkmark' size={40} style={{marginLeft: 5}} />
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        )
    }
}
