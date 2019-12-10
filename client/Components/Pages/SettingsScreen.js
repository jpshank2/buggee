import React, { Component, Fragment } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: "Settings"
  };

  render() {
    return (
      <Fragment>
        
          <View style={settingsScreen.container}>
            <ImageBackground source={require('../images/whitePlate.jpg')} style={settingsScreen.headerImage}>
              <Text style={settingsScreen.headerText}>Settings</Text>
              </ImageBackground>
            <ScrollView style={settingsScreen.settingsContainer}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Profile")}
              >
                <Text style={settingsScreen.list}> My Profile </Text>
              </TouchableOpacity>

              <TouchableOpacity
              // onPress={() => this.props.navigation.navigate("Profile")}
              >
                <Text style={settingsScreen.list}> Saved Filters </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
      </Fragment>
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

    headerImage: {
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        flex: .5,
        borderBottomWidth: 3,
        borderBottomColor: 'red',
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 38,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 60,
        color: 'white',
        fontFamily: 'BradleyHandITCTT-Bold'
    },

  title: {
    margin:5,
    fontSize: 20
  },
  list: {
    fontSize: 24,
    marginLeft: 10,
  },
 
  
});
