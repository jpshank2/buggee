import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { Container, Content, Header, Body, Icon} from 'native-base';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer';

export default class ListScreen extends Component {
  static navigationOptions = {
    title: "Lists"
  };

  render() {
    return (
       

      <View style={listScreen.container}> 
      <Container>
        <Header>
          <Right>
            <Icon
              name="ios-settings"
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            />
          </Right>
        </Header>
      </Container>
        <ScrollView style={listScreen.listContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Shopping")}
          >
            <Text style={listScreen.title}> Shopping </Text>{" "}
          </TouchableOpacity>{" "}
          <View>
            <Text> Chicken </Text> <Text> Potatoes </Text>{" "}
            <Text> Frozen Peas </Text>{" "}
          </View>{" "}
        </ScrollView>{" "}
        <ScrollView style={listScreen.listContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Groceries")}
          >
            <Text style={listScreen.title}> Groceries </Text>{" "}
          </TouchableOpacity>{" "}
          <View>
            <Text> Olive Oil </Text> <Text> Garlic </Text>{" "}
            <Text> White Wine </Text> <Text> Chicken Stock </Text>{" "}
            <Text> Parsley </Text> <Text> Oregano </Text> <Text> Salt </Text>{" "}
            <Text> Pepper </Text>{" "}
          </View>{" "}
        </ScrollView>{" "}
      </View>
    );
  }
}

const listScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 40
  },
  list: {
    fontSize: 24,
    marginLeft: 10
  },
  listContainer: {
    flex: 1,
    marginTop: 40
  }
});
