import React, { Component, Fragment } from "react";
import { View, Text, Button, StyleSheet } from "react-native";


export default class HomeScreen extends Component {
static navigationOptions = {
  title: 'Home'
}

  render() {
    return (
        <View style={homeScreen.container}>
          <Text> Hey there </Text>
        </View>
    );
  }
}

const homeScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
