import React from 'react'
import { View, StyleSheet, Image, Text, Dimensions, ScrollView } from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'
import DefaultStyles from '../constants/default-styles'
import MainButton from '../components/MainButton'

const GameOverScreen = (props) => {
    return (
        <ScrollView>
            <View style={DefaultStyles.screen}>
                <TitleText>The Game is Over</TitleText>
                <View style={styles.imageContainer}>
                    <Image
                        fadeDuration={1000}
                        //source={require('../assets/success.png')}
                        source={{ uri: 'https://thesayingquotes.com/wp-content/uploads/2018/12/success-quotes-1024x574.jpg' }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>
                        Your phone needed{' '}
                        <Text style={styles.highlight}>{props.roundsNumber}</Text>{' '}
                    rounds to guess the number{' '}
                        <Text style={styles.highlight}>{props.userNumber}</Text>.
                </BodyText>
                </View>

                <MainButton onPress={props.onRestart}>
                    NEW GAME
            </MainButton>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.4,
        borderRadius: 150,
        borderWidth: 1,
        borderColor: 'black',
        overflow: 'hidden',
        margin: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    highlight: {
        color: Colors.primaryColor,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;
