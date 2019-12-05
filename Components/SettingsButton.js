import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export class SettingsButton extends Component {
    render() {
        return(
            <Ionicons 
                name="ios-settings"
                color="#00000"
                size={30}
                onPress={() => {}}
            />
        )
    }
}

const styles = StyleSheet.create({
    settingsIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 40,
        left: 20
    }
})