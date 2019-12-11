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
            pantryList: []
        }
    }

    /*
    componentDidMount() {
        fetch("http://localhost:5000/api/add-item-here")
            .then(res => {
                return res.json()
            })
            .then(data => {
                let pantryList = data.hits
                this.setState({ pantryList: pantryList })
            })
    }
    */

    render() {
        return (
            <View>
                <Text style={{color:'white', fontSize: 22}}>Add Item:</Text>
                <TextInput style={{width: 200, marginBottom: 8, paddingLeft: 5, color:'white', borderColor: 'white', borderWidth: .5, borderRadius: 20, fontSize: 18}}
                    ref={input => {this.textInput = input}}
                    placeholder="New Item"
                    placeholderTextColor="white" 
                    onChangeText={newItem => this.setState({ newItem })}
                    onSubmitEditing={() => {
                        this.props.addPantry(this.state.newItem)
                        this.textInput.clear()
                    }} />
                {this.props.pantryList.map((items, index) => {
                    return (
                        <View key={index}>
                            <View style={{ flexDirection: "row", flexWrap: "wrap", maxWidth: "90%", alignItems: "center", margin: 5 }} >
                                <TouchableOpacity
                                    onPress={() => {
                                        this.props.removePantry(items)
                                        alert(`You removed ${items} from your Pantry List!`)
                                    }}
                                >
                                    <Ionicons name='ios-trash' size={30} style={{ marginRight: 15, color: "white" }} />
                                </TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 19, flexWrap: "wrap" }}>
                                    {items}
                                </Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
}
