import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

export default class MyProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  constructor(props) {
    super(props);

    this.state = {
      displayName: "Jonathan Deer",
      dnameInput: "",
      bio:
        "I'm seriously all about some food. It goes in my stomach, and I feel great when that happens haha",
      bioinput: "",
      location: "Brompton, AL",
      locationInput: "",
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
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 25,
              marginBottom: 0
            }}
          >
            {this.state.displayName}
          </Text>
          <Image
            source={require("../images/profilePic.jpg")}
            style={myProfileScreen.profilePicture}
          />
        </View>
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
        <TouchableOpacity
          onPress={() => {
            this.setState({ editIsClicked: true });
            console.log("Clicked");
          }}
        >
          <Text style={myProfileScreen.editButton}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const myProfileScreen = StyleSheet.create({
  container: {
    // paddingTop: 10,
    flex: 1,
    backgroundColor: "#EEE7E2",
    justifyContent: "center",
    textAlign: "left",
    borderRadius: 15,
    margin: 10,
    paddingHorizontal: 10,
    marginTop: "5%",
    marginBottom: "40%",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "gray",
    shadowRadius: 1,
    shadowOpacity: 0.2
  },
  bioContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    padding: 10,
    margin: 6,
    fontSize: 18
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: "#fff",
    margin: 20,
    padding: 6
  },
  editButton: {
    backgroundColor: "#fff",
    borderRadius: 35,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "gray",
    shadowRadius: 1,
    shadowOpacity: 0.2,
    marginTop: 20,
    padding: 8,
    width: "40%",
    textAlign: "center"
  },
  editPageText: {
    fontSize: 17
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "red",
    borderWidth: 1.5,
    marginLeft: 30,
    marginTop: 5
  }
});
