import React, { Component, Fragment } from "react";
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Heart from "../Fragments/Heart";

export default class SearchResultScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      id: "",
      loading: true,
      color: false
    };
  }

  static navigationOptions = {
    title: `Results`
  };

  componentDidMount() {
    if (
      this.props.navigation.getParam("diet", "null") == "no" &&
      this.props.navigation.getParam("health", "null").length == 0
    ) {
      let q = JSON.stringify(this.props.navigation.getParam("q", "null"));
      let fixedQ = q.substring(1, q.length - 1);
      fetch(
        // `https://api.edamam.com/search?q=chicken&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c`
        `https://api.edamam.com/search?q=${fixedQ}&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c`
      )
        .then(res => {
          return res.json();
        })
        .then(data => {
          let recipes = data.hits;
          this.setState({ recipes: recipes, loading: false });
        })
        .catch(() => console.log("not empty"));
    } else if (
      this.props.navigation.getParam("diet", "null") !== "no" &&
      this.props.navigation.getParam("health", "null").length == 0
    ) {
      let q = JSON.stringify(this.props.navigation.getParam("q", "null"));
      let fixedQ = q.substring(1, q.length - 1);
      let diet = JSON.stringify(this.props.navigation.getParam("diet", "null"));
      let fixedDiet = diet.substring(1, diet.length - 1);
      fetch(
        `https://api.edamam.com/search?q=${fixedQ}&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c&diet=${fixedDiet}`
      )
        .then(res => {
          return res.json();
        })
        .then(data => {
          let recipes = data.hits;
          this.setState({ recipes: recipes, loading: false });
        })
        .catch(() => console.log("nope"));
    } else if (
      this.props.navigation.getParam("diet", "null") !== "no" &&
      this.props.navigation.getParam("health", "null").length > 0
    ) {
      let q = JSON.stringify(this.props.navigation.getParam("q", "null"));
      let fixedQ = q.substring(1, q.length - 1);
      let diet = JSON.stringify(this.props.navigation.getParam("diet", "null"));
      let fixedDiet = diet.substring(1, diet.length - 1);
      let health = this.props.navigation.getParam("health", "null");
      let fixedHealth = health.join("&health=");
      fetch(
        `https://api.edamam.com/search?q=${fixedQ}&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c&diet=${fixedDiet}&health=${fixedHealth}`
      )
        .then(res => {
          return res.json();
        })
        .then(data => {
          let recipes = data.hits;
          this.setState({ recipes: recipes, loading: false });
        })
        .catch(() => console.log("nope"));
    } else if (
      this.props.navigation.getParam("diet", "null") == "no" &&
      this.props.navigation.getParam("health", "null").length > 0
    ) {
      let q = JSON.stringify(this.props.navigation.getParam("q", "null"));
      let fixedQ = q.substring(1, q.length - 1);
      let health = this.props.navigation.getParam("health", "null");
      let fixedHealth = health.join("&health=");
      fetch(
        `https://api.edamam.com/search?q=${fixedQ}&app_id=239382c6&app_key=8a0a2492a859731d69025557799ecb0c&health=${fixedHealth}`
      )
        .then(res => {
          console.log(res.json())
          return res.json();
        })
        .then(data => {
          let recipes = data.hits;
          this.setState({ recipes: recipes, loading: false });
        })
        .catch(() => console.log("nope"));
    } else {
      alert("Something went wrong. Please try again");
    }
  }

  render() {
    return (
      <View style={searchResultScreen.container}>
        <ImageBackground source={require('../images/whitePlate.jpg')} style={searchResultScreen.headerImage}>
        <ScrollView>
          <Text style={searchResultScreen.showingText}>
            Showing results for:{" "}
            {JSON.stringify(this.props.navigation.getParam("q", "null"))}
          </Text>
          {this.state.loading ? (
            <Text style={searchResultScreen.loading}>Loading...</Text>
          ) : (
              this.state.recipes.map(recipe => {
                let uriArray = recipe.recipe.uri.split("");
                let idArray = [];
                for (let i = 0; i < uriArray.length; i++) {
                  if (uriArray[i] == "_") {
                    for (let k = i + 1; k < uriArray.length; k++) {
                      idArray.push(uriArray[k]);
                    }
                  }
                }
                let id = idArray.join("");
                return (
                  <View
                    style={searchResultScreen.recipe}
                    key={recipe.recipe.uri}
                  >
                    <Image
                      style={searchResultScreen.image}
                      source={{ uri: recipe.recipe.image }}
                    />
                    <View
                      style={{
                          flexDirection: "row",
                        justifyContent: "center"
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          opacity: 1,
                          flexWrap: "wrap",
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            fontSize: 22,
                            fontWeight: "500",
                            color: "#000",
                            paddingLeft: 5,
                            flexWrap: "wrap",
                          }}
                        >
                          {recipe.recipe.label}
                        </Text>
                          <View style={{ 
                            flexDirection: "row", 
                            justifyContent: "space-evenly" 
                            }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.navigate("Recipe", {
                              r: id
                            })
                          }
                          }
                        >
                          <Text
                            style={{
                              textAlign: "center",
                              fontSize: 20,
                              fontWeight: "300",
                              margin: 5,
                              paddingLeft: 6
                            }}
                          >
                            Details
                          </Text>
                        </TouchableOpacity>
                          <Heart />
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })
            )}
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const searchResultScreen = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    minWidth: "85%",
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  showingText: {
    margin: 10,
    fontSize: 14,
    opacity: 0.7,
    color: "white",
    textAlign: "center"
  },
  image: {
    width: 300,
    height: 300,
    maxWidth: 300,
    maxHeight: 300,
    alignSelf: "center",
    // margin: 5,
    // padding: 5,
    borderRadius: 15,
    opacity: 1,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "gray",
    shadowRadius: 1,
    shadowOpacity: 0.35
  },

  recipe: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignSelf: "center",
    alignContent: "center",
    backgroundColor: "#ddd",
    borderRadius: 15,
    padding: 2,
    marginBottom: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "gray",
    shadowRadius: 1,
    shadowOpacity: 0.2,
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "95%"
  },

  loading: {
    fontSize: 25
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
