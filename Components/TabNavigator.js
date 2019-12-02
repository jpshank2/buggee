import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from '@expo/vector-icons/Ionicons.js';
import HomeScreen from './Pages/HomeScreen';
import SearchScreen from './Pages/SearchScreen';
import BookmarkedScreen from './Pages/BookmarkedScreen';
import ListNavigator from './ListNavigator';
import { createStackNavigator } from 'react-navigation-stack';

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: createStackNavigator({Home: HomeScreen}),
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name={`ios-home`} color={tintColor} size={30} />
                )
            }
        },
        Search: {
            screen: createStackNavigator({Search: SearchScreen}),
            navigationOptions: {
                tabBarLabel: "Search",
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name={`md-search`} color={tintColor} size={30} />
                )
            }
        },
        Lists: {
            screen: ListNavigator,
            navigationOptions: {
                tabBarLabel: "Lists",
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name={`ios-list`} color={tintColor} size={30} />
                )
            }
        },
        Bookmarked: {
            screen: createStackNavigator({Bookmarked: BookmarkedScreen}),
            navigationOptions: {
                tabBarLabel: "Bookmarked",
                tabBarIcon: ({tintColor}) => (
                    <Ionicons name={`ios-heart-empty`} color={tintColor} size={30} />
                )
            }
        },
    },
    {
        initialRouteName: "Home",
    },
);

export default createAppContainer(TabNavigator)
