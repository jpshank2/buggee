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
    this.setState({ shoppingList: newShopping })
  }

  removePantry = (clickedItem) => {
    let newPantry = this.state.pantryList.filter((item) => {
      return item !== clickedItem
    })
    this.setState({ pantryList: newPantry })
  }

  componentDidMount() {
    if (this.props.navigation.getParam("ingredients", "null") != "null") {
      console.log(this.props.navigation.getParam("ingredients"))
      this.setState({ shoppingList: [...this.state.shoppingList, ...this.props.navigation.getParam("ingredients", "null")] })
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.navigation.getParam("ingredients", "null") != "null") {
  //     let newList = [...this.state.shoppingList, ...this.props.navigation.getParam("ingredients", "null")]
  //     if (newList != prevProps.shoppingList) {
  //       this.setState({shoppingList: newList})
  //     }
  //   }
  // }

  render() {
    return (
      <View style={listScreen.container}>
        <ImageBackground source={require('../images/whitePlate.jpg')} style={listScreen.headerImage}>
          <View style={{
            alignContent: 'center', borderBottomWidth: 2,
            borderColor: 'white', height: 55
          }}>
            <Text style={listScreen.instructions}>Tap a Shopping List Item to Add it to Your Pantry and Remove it from Your Shopping List!</Text>
            <Text style={listScreen.instructions}>Press and Hold Any Item to Just Remove it!</Text>
          </View>

          <View style={listScreen.listContainerBackground} >
            <Text style={listScreen.title}> Shopping </Text>
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
            <Text style={listScreen.title}> Pantry </Text>
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
    alignItems: 'center'
  },

  list: {
    fontSize: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },

  listContainerBackground: {
    flex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.6)',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 100,
    marginRight: 100,
    borderRadius: 30,
    width: 200,
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
