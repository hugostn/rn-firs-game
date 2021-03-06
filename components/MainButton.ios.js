import React from 'react'
import { View, StyleSheet, Platform, TouchableOpacity, Text, TouchableNativeFeedback } from 'react-native'
import Colors from '../constants/colors'

const MainButton = (props) => {
    return (
        <ButtonComponent onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </ButtonComponent>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;