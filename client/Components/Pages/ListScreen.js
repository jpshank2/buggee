import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import GroceryList from "../Fragments/PantryList";
import ShoppingList from "../Fragments/ShoppingList";
import { NavigationEvents } from 'react-navigation';

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
      ],
      addedList: []
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
    this.setState({ shoppingList: newShopping })
  }

  removePantry = (clickedItem) => {
    let newPantry = this.state.pantryList.filter((item) => {
      return item !== clickedItem
    })
    this.setState({ pantryList: newPantry })
  }

  render() {
    return (
      <View style={listScreen.container}>
        <NavigationEvents 
          onDidFocus={payload => {
            if (this.props.navigation.getParam("ingredients", "null") != "null") {
              this.setState({ shoppingList: [...this.state.shoppingList, ...this.props.navigation.getParam("ingredients", "null")] })
            } 
          }} />
        <ImageBackground source={require('../images/whitePlate.jpg')} style={listScreen.headerImage}>
          {/* <View style={{
            alignContent: 'center', borderBottomWidth: 2,
            borderColor: 'white', height: 55, marginTop: 15
          }}>
            <Text style={listScreen.instructions}>Click the Check Mark to Add an Item to Your Pantry and Remove it from Your Shopping List!</Text>
            <Text style={listScreen.instructions}>Click the Trash Can to Remove an Item!</Text>
          </View> */}

          <View style={listScreen.listContainerBackground} >
            <Text style={listScreen.title}> Shopping List </Text>
            <ScrollView >
              {/* <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Shopping",
                  {
                    addShopping: this.addShopping,
                    shoppingList: this.state.shoppingList,
                    addShoppingToPantry: this.addShoppingToPantry,
                    removeShopping: this.removeShopping
                  })}
              >

              </TouchableOpacity> */}
              <View style={listScreen.list}>
                <ShoppingList
                  style={listScreen.grocerylist}
                  removeShopping={this.removeShopping}
                  addShoppingToPantry={this.addShoppingToPantry}
                  addShopping={this.addShopping}
                  shoppingList={this.state.shoppingList} />
              </View>
            </ScrollView>
          </View>

          <View style={listScreen.listContainerBackground}>
            <Text style={listScreen.title}> Pantry List </Text>
            <ScrollView >
              {/* <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Pantry", {
                  addPantry: this.addPantry,
                  pantryList: this.state.pantryList,
                  removePantry: this.removePantry
                })}
              >

              </TouchableOpacity> */}
              <View style={listScreen.list}>
                <GroceryList
                  removePantry={this.removePantry}
                  addPantry={this.addPantry}
                  pantryList={this.state.pantryList} />
              </View>
            </ScrollView>
          </View>

        </ImageBackground>
      </View>
    );
  }
}

const listScreen = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    // justifyContent: "center"
  },
  title: {
    fontSize: 40,
    color: 'white',
  },

  grocerylist: {
    color: 'white'
  },

  shoppinglist: {
    color: 'white'
  },

  instructions: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
  },

  list: {
    fontSize: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },

  listContainerBackground: {
    flex: 1,
    backgroundColor: "rgba(117, 86, 131, 0.8)",
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 30,
    width: "75%",
  },

  listContainer: {
    flex: 1,
    marginTop: 80,
  },

  headerImage: {
    width: '100%',
    display: 'flex',
    // textAlign: 'center',
    flex: 1.5,
    //borderBottomWidth: 3,
    borderBottomColor: 'red',
    //alignItems: "center",
    //justifyContent: "center"
  },
});
