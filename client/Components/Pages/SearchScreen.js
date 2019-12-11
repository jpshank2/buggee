import React, { Component, Fragment } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Picker,
  ImageBackground
} from "react-native";
import FilterMenu from "../Fragments/FilterMenu";
import Ionicons from "@expo/vector-icons/Ionicons.js";
import ListScreen from "./ListScreen";


import { StackNavigator, DrawerItems, SafeAreaView } from "react-navigation";

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      diet: "no",
      health: []
    };
  }
  static navigationOptions = {
    title: "Search"
  };

  handleText = e => {
    this.setState({ text: e.target.value });
  };

  selectDiet = e => {
    this.setState({ diet: e });
  };

  addHealth = e => {
    if (this.state.health.length === 0) {
      this.setState({ health: [e] });
    } else {
      this.setState({ health: [...this.state.health, e] });
    }
  };

  render() {
    return (
      <Fragment>
        <ImageBackground source={require('../images/whitePlate.jpg')}  style={searchScreen.container}>
          <View style={searchScreen.sectionStyle}>
            <TextInput
              style={searchScreen.input}
              value={this.state.text}
              placeholder="Search recipe database"
              placeholderTextColor='black'
              onChangeText={text => this.setState({ text })}
              returnKeyType="go"
              onSubmitEditing={() => {
                this.props.navigation.navigate("Results", {
                  q: this.state.text,
                  diet: this.state.diet,
                  health: this.state.health
                });
              }}
            />
            <Ionicons
              name={`ios-search`}
              size={20}
              style={{ marginRight: 6 }}
              onPress={() => {
                this.props.navigation.navigate("Results", {
                  q: this.state.text,
                  diet: this.state.diet,
                  health: this.state.health
                });
              }}
            />
          </View>

          <FilterMenu
            selectDiet={this.selectDiet}
            diet={this.state.diet}
            addHealth={this.addHealth}
            health={this.state.health}
          />
          <TouchableOpacity style>
            <Text
              style={{
                display: this.state.diet == "no" ? "none" : "flex",
                fontSize: 15,
                marginBottom: 15,
                color: 'white'
              }}
            >
              Current Dietary Filter: {this.state.diet}
            </Text>
            <Text
              style={{
                display: this.state.health.length == 0 ? "none" : "flex",
                fontSize: 15,
                marginBottom: 15,
                color: 'white'
              }}
            >
              Current Health Filter(s): {this.state.health.join(", ")}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              padding: 4,
              marginBottom: 150,
              borderRadius: 10,
              backgroundColor: "#d3d3d3",
              flexDirection: "row",
              shadowOffset: { width: 2, height: 1 },
              shadowColor: "gray",
              shadowRadius: 1,
              shadowOpacity: 0.2
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row"
              }}
              onPress={() => {
                this.setState({ text: "", diet: "no", health: [] });
              }}
            >
              <Ionicons name={`ios-trash`} size={20} />
              <Text style={{ margin: 2, paddingLeft: 3,}}>Clear Filters</Text>
            </TouchableOpacity>
          </View>
          <Image style={{marginBottom: 15}} source={require("../images/white.png")} />
        </ImageBackground>
      </Fragment>
    );
  }
}

const searchScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: 'red',
        borderBottomWidth: 2,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dedede",
    borderColor: "gray",
    borderRadius: 5,
    borderWidth: 1.5,
    height: 40,
    margin: 10,
    width: "95%",
    paddingLeft: 5,
    overflow: "hidden",
  },
  input: {
    flex: 1,
    backgroundColor: '#dedede',
  }
});
