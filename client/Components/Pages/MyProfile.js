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

export default class MyProfileScreen extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  constructor(props) {
    super(props);

    this.state = {
      bio: "",      
      bioinput: "",
      location: "",
      locationInput: "",
      editIsClicked: false,
    };
  }

  render() {
    return this.state.editIsClicked ? (
     <View style={myProfileScreen.container}>
     <Text> Edit Bio </Text>
        <TextInput
          style={myProfileScreen.input}
          value={this.state.bioInput}
          placeholder={this.state.bio}
          onChangeText={(bioInput) => this.setState({ bioInput })}
          returnKeyType="go"
          onSubmitEditing={() => { 
            this.setState({ bio: this.state.bioInput }, 
            this.setState({ editIsClicked: false })) 
            }
          }
        />   
     <Text> Edit Location </Text>
        <TextInput
          style={myProfileScreen.input}
          value={this.state.locationInput}
          placeholder={this.state.location}
          onChangeText={(locationInput) => this.setState({ locationInput })}
          returnKeyType="go"
          onSubmitEditing={() => { 
            this.setState({ location: this.state.locationInput }, 
            this.setState({ editIsClicked: false })) 
            }
          }
        />
   </View>
    ) : (
      <View style={myProfileScreen.container}>
      <Text> Bio: {this.state.bio} </Text>
      <Text> Location: {this.state.location} </Text>
      <ScrollView style={myProfileScreen.settingsContainer}>
        <TouchableOpacity
          onPress={() => {
            this.setState({ editIsClicked: true });
            console.log("Clicked");
            }
          }
        >
          <Text
            style={myProfileScreen.title}
            >
            Edit Profile
          </Text>
        </TouchableOpacity>
      </ScrollView>   
    </View>
    );
  }
}


const myProfileScreen = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    margin: 20
  }
});