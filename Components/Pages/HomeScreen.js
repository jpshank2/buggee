import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Picker } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons.js";
import { DNav } from "../DrawerNavigator";
import { Container, Content, Header, Body, Icon } from "native-base";
import { StackNavigator, DrawerItems, SafeAreaView } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

export class HomeScreen extends Component {
  render() {
    return (
      <View style={homeScreen.container}>
        <DNav />
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
