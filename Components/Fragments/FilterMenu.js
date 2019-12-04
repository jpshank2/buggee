import React, { Component } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, Picker, StyleSheet } from 'react-native';
//import { CheckBox } from 'react-native-elements';
//import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

export default class FilterMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            diet: ""
        }
    }

    render() {
        return (
            <ScrollView>
                <Text>Filters:</Text>
                <Picker
                    selectedValue={this.props.diet}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.props.selectDiet(itemValue)
                    }>
                    <Picker.Item label="Balanced" value="balanced" />
                    <Picker.Item label="High Protein" value="high-protein" />
                    <Picker.Item label="Low Carb" value="low-carb" />
                    <Picker.Item label="Low Fat" value="low-fat" />
                </Picker>
            </ScrollView>
            // <MenuProvider toggleMenu={"filters"} style={{ flexDirection: "column", padding: 30 }}>
            //     <ScrollView>
            //         <Menu name={"filters"}>

            //             <MenuTrigger>
            //                 <Text>Filters</Text>
            //             </MenuTrigger>


            //             <MenuOptions>
            //                 <ScrollView>
            //                 <MenuOption>
            //                     <Text>Dietary Filters</Text>
            //                     <MenuOptions>
            //                         <MenuOption onSelect={() => this.props.selectDiet("balanced")}>
            //                             <Text>Balanced</Text>
            //                         </MenuOption>
            //                         <MenuOption onSelect={() => this.props.selectDiet("high-protein")}>
            //                             <Text>High Protein</Text>
            //                         </MenuOption>
            //                         <MenuOption onSelect={() => this.props.selectDiet("low-carb")}>
            //                             <Text>Low Carb</Text>
            //                         </MenuOption>
            //                         <MenuOption onSelect={() => this.props.selectDiet("low-fat")}>
            //                             <Text>Low Fat</Text>
            //                         </MenuOption>
            //                     </MenuOptions>
            //                 </MenuOption>
            //                 <MenuOption>
            //                     <Text>Health Filters</Text>
            //                     <MenuOptions >
            //                         <MenuOption>
            //                             <CheckBox title="Vegan" />
            //                         </MenuOption>
            //                         <MenuOption>
            //                             <CheckBox title="Vegetarian" />
            //                         </MenuOption>
            //                         <MenuOption>
            //                             <CheckBox title="Sugar Conscious" />
            //                         </MenuOption>
            //                         <MenuOption>
            //                             <CheckBox title="Peanut Free" />
            //                         </MenuOption>
            //                         <MenuOption>
            //                             <CheckBox title="Tree Nut Free" />
            //                         </MenuOption>
            //                         <MenuOption>
            //                             <CheckBox title="Alcohol Free" />
            //                         </MenuOption>
            //                     </MenuOptions>
            //                 </MenuOption>
            //                 </ScrollView>
            //             </MenuOptions>

            //         </Menu>
            //     </ScrollView>
            // </MenuProvider>
        )
    }
}
