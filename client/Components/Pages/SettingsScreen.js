import React, { Component } from "react";
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
 <View style={settingsScreen.container}> 
        <ScrollView style={settingsScreen.settingsContainer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Text style={settingsScreen.title}> My Profile </Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
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
  settingsContainer: {
    flex: 1,
    marginTop: 40
  }
});
