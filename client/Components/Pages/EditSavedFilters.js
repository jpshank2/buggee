import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Picker
} from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

import FilterMenu from "../Fragments/FilterMenu";

export default class EditFiltersScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: " ",
      editIsClicked: false,
      text: "",
      diet: "no",
      health: []
    };
  }

  static navigationOptions = {
    title: "Filters"
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
    return this.state.editIsClicked ? (
      <Fragment>
        <View style={editFiltersScreen.container}>
          <Text style={editFiltersScreen.editPageText}>
            Select Filters to Save
          </Text>
          <FilterMenu
            selectDiet={this.selectDiet}
            diet={this.state.diet}
            addHealth={this.addHealth}
            health={this.state.health}
          />
          <TouchableOpacity>
            <Text
              style={{
                display: this.state.diet == "no" ? "none" : "flex",
                fontSize: 15,
                marginBottom: 15
              }}
            >
              Current Dietary Filter: {this.state.diet}
            </Text>
            <Text
              style={{
                display: this.state.health.length == 0 ? "none" : "flex",
                fontSize: 15,
                marginBottom: 15
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
              <Text style={{ margin: 2, paddingLeft: 3 }}>Clear Filters</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Fragment>
    ) : (
      <View style={editFiltersScreen.container}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 10
          }}
        >
          Current Saved Filters: n/a
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.setState({ editIsClicked: true });
            console.log("Clicked");
          }}
        >
          <Text style={editFiltersScreen.editButton}>Edit Filters</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const editFiltersScreen = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    textAlign: "left",
    backgroundColor: "#ddd",
    borderRadius: 15,
    margin: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "gray",
    shadowRadius: 1,
    shadowOpacity: 0.2
  },
  editButton: {
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "gray",
    shadowRadius: 1,
    shadowOpacity: 0.2,
    marginTop: 20,
    padding: 8,
    width: "auto",
    textAlign: "center"
  }
});
