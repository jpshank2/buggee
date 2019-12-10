import React, { Component, Fragment } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Picker,
  StyleSheet
} from "react-native";
import { CheckBox } from "react-native-elements";

export default class FilterMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diet: false,
      health: false,
      checked: false
    };
  }

  render() {
    return (
      <Fragment>
        <View
          style={{
            flexDirection: "row",
            shadowOffset: { width: 2, height: 1 },
            shadowColor: "gray",
            shadowRadius: 1,
            shadowOpacity: .2,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#d3d3d3",
              borderRadius: 15,
              marginRight: 10,
              color: 'white'
            }}
            onPress={() =>
              this.setState({ diet: !this.state.diet, health: false })
            }
          >
            <Text style={{ margin: 10, fontWeight: "bold" }}>
              Dietary Filters
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#d3d3d3",
              borderRadius: 15,
              color: 'white'
            }}
            onPress={() =>
              this.setState({ health: !this.state.health, diet: false })
            }
          >
            <Text style={{ margin: 10, fontWeight: "bold" }}>
              Health Filters
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: 20, margin: 3}}>
          <Picker
            selectedValue={this.props.diet}
            style={{
              height: 50,
              width: 200,
              display: this.state.diet ? "flex" : "none",
            }}
            onValueChange={(itemValue, itemPosition) =>
              this.props.selectDiet(itemValue)
            }
          >
            <Picker.Item label="Select" />
            <Picker.Item label="Balanced" value="balanced" />
            <Picker.Item label="High Protein" value="high-protein" />
            <Picker.Item label="Low Carb" value="low-carb" />
            <Picker.Item label="Low Fat" value="low-fat" />
          </Picker>
          <Picker
            selectedValue={this.props.health[this.props.health.length - 1]}
            style={{
              height: 50,
              width: 200,
              display: this.state.health ? "flex" : "none",
              color: 'white'
            }}
            onValueChange={(itemValue, itemPosition) => {
              this.props.addHealth(itemValue);
            }}
          >
            <Picker.Item label="Select" />
            <Picker.Item label="Vegan" value="vegan" />
            <Picker.Item label="Vegetarian" value="vegetarian" />
            <Picker.Item label="Sugar Conscious" value="sugar-conscious" />
            <Picker.Item label="Peanut Free" value="peanut-free" />
            <Picker.Item label="Tree Nut Free" value="tree-nut-free" />
            <Picker.Item label="Alcohol Free" value="alcohol-free" />
          </Picker>
        </ScrollView>
      </Fragment>
    );
  }
}
