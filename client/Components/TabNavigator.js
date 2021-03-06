import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from "@expo/vector-icons/Ionicons.js";
import HomeScreen from "./Pages/HomeScreen";
import BookmarkedScreen from "./Pages/BookmarkedScreen";
import ListNavigator from "./ListNavigator";
import SearchNavigator from "./SearchNavigator";
import SettingsNavigator from "./SettingsNavigator";

import { createStackNavigator } from "react-navigation-stack";
import ListScreen from "./Pages/ListScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name={`ios-home`} color={tintColor} size={30} />
        )
      }
    },
    Search: {
      screen: SearchNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name={`md-search`} color={tintColor} size={30} />
        )
      }
    },
    Lists: {
      screen: ListScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name={`ios-list`} color={tintColor} size={30} />
        )
      }
    },
    Cookbook: {
      screen: createStackNavigator({ Cookbook: BookmarkedScreen }),
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name={`ios-heart-empty`} color={tintColor} size={30} />
        )
      }
    },
    Settings: {
        screen: SettingsNavigator,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name={`ios-settings`} color={tintColor} size={30} />
          )
        }
      }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(TabNavigator);