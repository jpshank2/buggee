import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

export default class MyProfileScreen extends Component {
  static navigationOptions = {
    title: "Filters"
  };

  constructor(props) {
    super(props);

    this.state = {
      filters: " ",
      editIsClicked: false
    };
  }

  render() {
    return this.state.editIsClicked ? (
      <View style={myProfileScreen.container}>
        <ScrollView>
          <Text style={myProfileScreen.editPageText}> Edit Display Name </Text>
          <TextInput
            style={myProfileScreen.input}
            value={this.state.dnameInput}
            placeholder={this.state.displayName}
            onChangeText={dnameInput => this.setState({ dnameInput })}
            returnKeyType="go"
            onSubmitEditing={() => {
              this.setState(
                { displayName: this.state.displayName },
                this.setState({ editIsClicked: false })
              );
            }}
          />
          <Text style={myProfileScreen.editPageText}> Edit Bio </Text>
          <TextInput
            style={myProfileScreen.input}
            value={this.state.bioInput}
            placeholder={this.state.bio}
            onChangeText={bioInput => this.setState({ bioInput })}
            returnKeyType="go"
            onSubmitEditing={() => {
              this.setState(
                { bio: this.state.bioInput },
                this.setState({ editIsClicked: false })
              );
            }}
          />
          <Text style={myProfileScreen.editPageText}> Edit Location </Text>
          <TextInput
            style={myProfileScreen.input}
            value={this.state.locationInput}
            placeholder={this.state.location}
            onChangeText={locationInput => this.setState({ locationInput })}
            returnKeyType="go"
            onSubmitEditing={() => {
              this.setState(
                { location: this.state.locationInput },
                this.setState({ editIsClicked: false })
              );
            }}
          />
        </ScrollView>
      </View>
    ) : (
      <View style={myProfileScreen.container}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 10
          }}
        >
          {this.state.displayName}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name={`ios-pin`}
            size={18}
            style={{
              marginLeft: 8,
              paddingRight: 5
            }}
          />
          <Text
            style={{
              fontSize: 16,
              paddingLeft: 5,
              paddingRight: 8
            }}
          >
            {this.state.location}
          </Text>
        </View>
        <View style={myProfileScreen.bioContainer}>
          <Text>{this.state.bio} </Text>
        </View>
        <ScrollView style={myProfileScreen.settingsContainer}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ editIsClicked: true });
              console.log("Clicked");
            }}
          >
            <Text style={myProfileScreen.editButton}>Edit Profile</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}