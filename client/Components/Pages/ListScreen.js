import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import GroceryList from "../Fragments/PantryList";
import ShoppingList from "../Fragments/ShoppingList";

export default class ListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pantryList: [
        "Olive Oil", 
        "Garlic", 
        "White Wine", 
        "Chicken Stock", 
        "Parsley", 
        "Oregano", 
        "Salt", 
        "Pepper"
      ],
      shoppingList: [
        "Chicken",
        "Potatoes",
        "Frozen Peas"
      ]
    }
  }

  static navigationOptions = {
    title: "Lists"
  };

  addPantry = (pantryItem) => {
    this.setState({ pantryList: [...this.state.pantryList, pantryItem] })
  }

  addShopping = (shoppingItem) => {
    this.setState({ shoppingList: [...this.state.shoppingList, shoppingItem] })
  }

  render() {
    return (
      <View style={listScreen.container}>
        <ScrollView style={listScreen.listContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Shopping", {
              addShopping: this.addShopping,
              shoppingList: this.state.shoppingList
            })}
          >
            <Text style={listScreen.title}> Shopping </Text>
          </TouchableOpacity>
          <View>
            <ShoppingList addShopping={this.addShopping} shoppingList={this.state.shoppingList} />
          </View>
        </ScrollView>
        <ScrollView style={listScreen.listContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Pantry", {
              addPantry: this.addPantry,
              pantryList: this.state.pantryList
            })}
          >
            <Text style={listScreen.title}> Pantry </Text>
          </TouchableOpacity>
          <View>
            <GroceryList addPantry={this.addPantry} pantryList={this.state.pantryList} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const listScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 40
  },
  list: {
    fontSize: 24,
    marginLeft: 10
  },
  listContainer: {
    flex: 1,
    marginTop: 40
  }
});
