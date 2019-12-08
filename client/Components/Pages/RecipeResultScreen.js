import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default class RecipeResultScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      information: []
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
            counter++;
            return (
              <Text style={recipeResultScreen.ingredient} key={counter}>
                <FontAwesome name={`circle`} size={10} /> {ingredient}
              </Text>
            );
          });
          return (
            <ScrollView style={recipeResultScreen.container} key={info.url}>
              <Image
                source={{ uri: info.image }}
                style={recipeResultScreen.image}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginLeft: 10,
                  textAlign: "center"
                }}
              >
                <View
                  style={{
                    flexDirection: "column"
                  }}
                >
                  <Text style={recipeResultScreen.title}>{info.label}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "column"
                  }}
                >
                  <Text style={recipeResultScreen.source}>
                    by: {info.source}
                  </Text>
                </View>
              </View>
              <View style={recipeResultScreen.url}>
                <Text selectable>Recipe Website:</Text>
                <Text selectable>{info.url}</Text>
              </View>
              {ingredients}
            </ScrollView>
          );
        });
        this.setState({ information: information });
      });
  }

  render() {
    return this.state.information;
  }
}

const recipeResultScreen = StyleSheet.create({
  container: {
    flex: 1
  },

  image: {
    height: 300,
    width: 300,
    alignSelf: "center",
    borderRadius: 10
  },

  title: {
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center"
  },

  source: {
    textAlign: "center"
  },

  url: {
    padding: 15
  },

  ingredient: {
    marginLeft: 8,
    fontSize: 20
  }
});
