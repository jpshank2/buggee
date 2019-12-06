import React, { Component } from "react";
import { Platform, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons.js";

import SettingsScreen from './Pages/SettingsScreen'
import ListScreen from "./Pages/ListScreen";
import SearchScreen from "./Pages/SearchScreen";
import { createAppContainer } from "react-navigation";

import { createDrawerNavigator,  } from "react-navigation-drawer";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  drawerPosition: "right",
  // initialRoute: ProfileScreen
 
};

const DrawerNavigator = createDrawerNavigator({
    Settings: {
      screen: SettingsScreen,
      navigationOptions: { 
        drawerLabel: 'Settings' 
      }
    },
    Lists: {
      screen: ListScreen,
      navigationOptions: { 
        headerTitle: 'Lists' 
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: { 
        drawerLabel: 'Search' 
      }
    }
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
