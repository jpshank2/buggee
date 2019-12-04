import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Picker,  } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons.js";

import HomeScreen from "./Pages/HomeScreen";
import ListScreen from "./Pages/ListScreen";
import SearchScreen from "./Pages/SearchScreen";

import { Container, Content, Header, Body, Icon} from 'native-base';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer';


export default class DNav extends Component {
  static navigationOptions = {
    Home: HomeScreen
  };

  render() {
    return (
      <View style={homeScreen.container}>
        <Yes />
      </View>
    );
  }
}

const CustomDrawerContentComponent = (props) =>  (
    <Container>
        <Header style= {{height: 200}}>
            <Body>
                <Text>You opened settings</Text>
                {/* <Ionicons name={`ios-settings`} color={tintColor} size={30} /> */}
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
)

const Yes = createDrawerNavigator({
    List: {
        screen: ListScreen
    },
    Search: {
        screen: SearchScreen
    }
},
{
    initialRouteName: 'List',
    drawerPosition: 'right',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
});

const homeScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
