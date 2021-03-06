import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ImageBackground
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NavigationActions } from "react-navigation";

export default class RecipeResultScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      information: [],
      ingredient: []
    };
  }

  componentDidMount() {
    fetch(
      `https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${this.props.navigation.getParam(
        "r",
        "null"
      )}&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c`
    )
      .then(res => res.json())
      .then(data => {
        let information = data.map(info => {
          let counter = 0;
          let ingredients = info.ingredientLines.map(ingredient => {
            this.setState({
              ingredient: [...this.state.ingredient, ingredient]
            });
            counter++;
            return (
              <Text style={recipeResultScreen.ingredient} key={counter}>
                <FontAwesome name={`circle`} size={10} /> {ingredient}
              </Text>
            );
          });
          return (
            <ScrollView key={info.url}>
              <Image
                source={{ uri: info.image }}
                style={recipeResultScreen.image}
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  marginLeft: 10,
                  textAlign: "center",
                  maxWidth: "85%",
                  display: "flex",
                  flexWrap: "wrap"
                }}
              >
                <Text style={recipeResultScreen.title}>{info.label}</Text>
                <Text style={recipeResultScreen.source}>by: {info.source}</Text>
              </View>
              <View style={recipeResultScreen.url}>
                <TouchableOpacity
                  onPress={() => {
                    Linking.openURL(info.url);
                  }}
                >
                  <Text style={{textAlign: "center"}} selectable>View Source</Text>
                </TouchableOpacity>
              </View>
              {ingredients}
            </ScrollView>
          );
        });
        this.setState({ information: information });
      });
  }

  render() {
    return (
      <View style={recipeResultScreen.container}>
        <ImageBackground source={require('../images/whitePlate.jpg')} style={recipeResultScreen.headerImage}>
          <TouchableOpacity
            style={recipeResultScreen.add}
            onPress={() => {
              this.props.navigation.navigate("Lists", {
                ingredients: this.state.ingredient
              }, NavigationActions.navigate({ routeName: "Main" }))
            }}>
            <FontAwesome name={"plus-circle"} size={20} />
            <Text style={recipeResultScreen.addText}>Add Ingredients to Shopping List!</Text>
          </TouchableOpacity>
          {this.state.information}
        </ImageBackground>
      </View>
    );
  }
}

const recipeResultScreen = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "red",
    borderBottomWidth: 2
  },

  image: {
    height: 300,
    width: 300,
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 10
  },

  title: {
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
    color: "white"
  },

  source: {
    textAlign: "center",
    color: "white"
  },

  url: {
    fontSize: 18,
    backgroundColor: "#ddd",
    borderRadius: 15,
    padding: 15,
    width: 150,
    marginLeft: 120
  },

  ingredient: {
    marginLeft: 8,
    fontSize: 20,
    color: "white"
  },

  addText: {
    fontSize: 20
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
  add: {
    fontSize: 20,
    backgroundColor: "#ddd",
    borderRadius: 15,
    padding: 15,
    width: "90%",
    flexDirection: "row", 
    justifyContent: "space-evenly",
    alignSelf: "center",
    margin: 15
  }
})
