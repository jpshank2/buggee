import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: "Settings"
  };

  render() {
    return (
      <Fragment>
        <View style={settingsScreen.container}>
          <ScrollView style={settingsScreen.settingsContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Text style={settingsScreen.list}> My Profile </Text>
            </TouchableOpacity>

            <TouchableOpacity
            // onPress={() => this.props.navigation.navigate("Profile")}
            >
              <Text style={settingsScreen.list}> Saved Filters </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}

const settingsScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20
  },
  list: {
    fontSize: 24,
    marginLeft: 10
  },
  // settingsContainer: {
  //   flex: 1
  // }
});
