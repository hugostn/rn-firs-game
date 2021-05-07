import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        };

        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    },[])

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const choseNumber = parseInt(enteredValue);
        if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
            setConfirmed(false);
            Alert.alert('Invalid number!!', 'Number has to be a number between 1 and 99', [{
                text: "Okay",
                style: 'destructive',
                onPressre: resetInputHandler
            }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choseNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    const startGameHandler = () => {

    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <BodyText>You Selected:</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton
                    onPress={() => props.onStartGame(selectedNumber)}
                >
                    START GAME
                </MainButton>
            </Card>
        )
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.screen}>
                        <TitleText style={styles.title}>Start a New Game!</TitleText>
                        <Card style={styles.inputContainer}>
                            <BodyText>Select a Number</BodyText>
                            <Input
                                style={styles.input}
                                blurOnSubmit
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="number-pad"
                                maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue}
                            />
                            <View style={styles.buttonContainer}>
                                <View style={{width: buttonWidth}}>
                                    <Button title="Reset" color={Colors.accent} onPress={resetInputHandler} />
                                </View>
                                <View style={{width: buttonWidth}}>
                                    <Button
                                        title="Confirm"
                                        color={Colors.primaryColor}
                                        onPress={confirmInputHandler}
                                    />
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    //button: {
        //width: 100
     //   width: Dimensions.get('window').width / 4
    //},
    input: {
        width: 50,
        textAlign: "center"
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'open-sans'
    }
})

export default StartGameScreen;