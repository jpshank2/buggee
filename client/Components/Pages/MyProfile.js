import React, { Component, Fragment } from "react";
import { View, Text, Button, StyleSheet } from "react-native";


export default class MyProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    return (
        <View style={myProfileScreen.container}>
          <Text> Timmy Turner </Text>
        </View>
    );
  }
}

const myProfileScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});