import React, { Component } from "react";
import { Platform, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons.js";

import HomeScreen from './Pages/HomeScreen'
import ListScreen from "./Pages/ListScreen";
import SearchScreen from "./Pages/SearchScreen";
import { createAppContainer } from "react-navigation";

import SettingsButton from './SettingsButton'
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

const WIDTH = Dimensions.get("window").width;

const DrawerNavigatorConfig = {
  drawerWidth: WIDTH * 0.83,
  drawerPosition: "right",
  initialRoute: HomeScreen
};

const DNav = createDrawerNavigator(
  {
    // Home: {
    //   screen: HomeScreen
    // },
    Lists: {
      screen: ListScreen
    },
    Search: {
      screen: SearchScreen
    }
  },
  DrawerNavigatorConfig
);

export default createAppContainer(DNav);
