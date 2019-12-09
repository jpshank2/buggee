import React, { Component, Fragment } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  static navigationOptions = {
    title: "Login"
  };

  handleText = e => {
    this.setState({ text: e.target.value });
  };

  selectDiet = e => {
    this.setState({ diet: e });
  };

  render() {
    return (
      <View style={loginScreen.container}>
        <Text>Username</Text>
        <TextInput
          style={loginScreen.input}
          value={this.state.username}
          placeholder="Username"
          onChangeText={text => this.setState({ text })}
          returnKeyType="go"
          onSubmitEditing={() => {
           //add function to check db for correct username and pw here
          }}
        />
        <Text>Password</Text>
        <TextInput
          style={loginScreen.input}
          value={this.state.password}
          placeholder="Password"
          onChangeText={text => this.setState({ text })}
          returnKeyType="go"
          onSubmitEditing={() => {
           //add function to check db for correct username and pw here
          }}
        />
        
        <TouchableOpacity
          onPress={() => {
              //add some sort of confirmation if they logged in correctly/nav back to Home
              //but with profile picture in header
            this.props.navigation.navigate("", {
              q: this.state.text,
              diet: this.state.diet
            });
          }}
        >
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const loginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: 'red',
        borderBottomWidth: 2,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    margin: 20
  }
});
