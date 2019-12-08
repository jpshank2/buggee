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

  addShoppingToPantry = (clickedItem) => {
    let newShopping = this.state.shoppingList.filter((item) => {
      return item !== clickedItem
    })
    this.setState({ shoppingList: newShopping, pantryList: [...this.state.pantryList, clickedItem] })
  }

  removeShopping = (clickedItem) => {
    let newShopping = this.state.shoppingList.filter((item) => {
      return item !== clickedItem
    })
    this.setState({shoppingList: newShopping})
  }

  removePantry = (clickedItem) => {
    let newPantry = this.state.pantryList.filter((item) => {
      return item !== clickedItem
    })
    this.setState({pantryList: newPantry})
  }

  componentDidMount() {
    console.log(this.props.navigation.getParam("ingredients", "null"))
    if (this.props.navigation.getParam("ingredients", "null") !== "null") {
      this.setState({shoppingList: [...this.state.shoppingList, ...this.props.navigation.getParam("ingredients", "null")]})
    }
  }

  render() {
    return (
      <View style={listScreen.container}>
        <Text>Tap a Shopping List Item to Add it to Your Pantry and Remove it from Your Shopping List!</Text>
        <Text>Press and Hold Any Item to Just Remove it!</Text>
        <ScrollView style={listScreen.listContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Shopping", {
              addShopping: this.addShopping,
              shoppingList: this.state.shoppingList,
              addShoppingToPantry: this.addShoppingToPantry,
              removeShopping: this.removeShopping
            })}
          >
            <Text style={listScreen.title}> Shopping </Text>
          </TouchableOpacity>
          <View>
            <ShoppingList removeShopping={this.removeShopping}
              addShoppingToPantry={this.addShoppingToPantry} 
              addShopping={this.addShopping} 
              shoppingList={this.state.shoppingList} />
          </View>
        </ScrollView>
        <ScrollView style={listScreen.listContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Pantry", {
              addPantry: this.addPantry,
              pantryList: this.state.pantryList,
              removePantry: this.removePantry
            })}
          >
            <Text style={listScreen.title}> Pantry </Text>
          </TouchableOpacity>
          <View>
            <GroceryList 
              removePantry={this.removePantry}
              addPantry={this.addPantry}
              pantryList={this.state.pantryList} />
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
