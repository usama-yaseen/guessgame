import React from 'react';
import {
    TouchableOpacity,
    ToastAndroid,
    Text,
    View
} from 'react-native';
import { GameScreenStyles } from './StyleSheet';
import { MenuStyles } from './StyleSheet';

export const GameScreen = (props) => {
    const [Number, setNumber] = React.useState(Math.floor(Math.random() * 100) + 1);
    console.log(Number);
    const [Score, setScore] = React.useState(0);
    const [Tries, setTries] = React.useState(5);
    const [Round, setRound] = React.useState(1);

    const [UserInpt, setUserInput] = React.useState("");
    const enterNum = (x) => {
        console.log("Here"),
            setUserInput(UserInpt + x);
    }
    return (
        <View style={{ borderWidth: 1, flex: 1, width: '100%', borderColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text style={{ alignSelf: 'center', width: '100%' }}>
                    Score = {Score}
                </Text>
                <Text style={{ alignSelf: 'center', width: '100%' }}>
                    Tries Left = {Tries}
                </Text>
                <Text style={{ alignSelf: 'center', width: '100%' }}>
                    Rounds = {Round}
                </Text>
            </View>
            <Text >
                {UserInpt}
            </Text>
            <NumPad enterNum={enterNum} />
            <GuessButton setTries={setTries} Tries={Tries} Number={Number} UserInpt={UserInpt} setUserInput={setUserInput} text="Guess" changeEndScreen={props.changeEndScreen} setMenuState={props.setMenuState} />
        </View>
    )
}

const GuessButton = (props) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    if (parseInt(props.UserInpt) == props.Number) {
                        ToastAndroid.show("Correct Guess", ToastAndroid.SHORT);
                        //Pop Up A Modal
                        console.log("Correct GUESS!")
                        props.setUserInput("")
                        props.changeEndScreen(true)
                    }
                    else {
                        ToastAndroid.show("Wrong Guess", ToastAndroid.SHORT);
                        props.setUserInput("");
                        props.setTries(props.Tries-1);
                    }
                    if(props.Tries==0){
                        console.log("here")
                        props.changeEndScreen(true)
                    }
                }}
                activeOpacity={0.5}
                style={MenuStyles.touchButton}
            >
                <Text style={MenuStyles.touchButtonstext}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const NumPad = (props) => {
    return (
        <View style={GameScreenStyles.NumPadContainer}>
            <View style={GameScreenStyles.Row}>
                <NumPadButton text="1" enterNum={props.enterNum}></NumPadButton>
                <NumPadButton text="2" enterNum={props.enterNum}></NumPadButton>
                <NumPadButton text="3" enterNum={props.enterNum}></NumPadButton>
            </View>
            <View style={GameScreenStyles.Row}>
                <NumPadButton text="4" enterNum={props.enterNum}></NumPadButton>
                <NumPadButton text="5" enterNum={props.enterNum}></NumPadButton>
                <NumPadButton text="6" enterNum={props.enterNum}></NumPadButton>
            </View>
            <View style={GameScreenStyles.Row}>
                <NumPadButton text="7" enterNum={props.enterNum}></NumPadButton>
                <NumPadButton text="8" enterNum={props.enterNum}></NumPadButton>
                <NumPadButton text="9" enterNum={props.enterNum}></NumPadButton>
            </View>
        </View>
    )
}
const NumPadButton = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={GameScreenStyles.NUMS}
            onPress={() => {
                console.log(props.text),
                    props.enterNum(props.text)
            }}>
            <Text style={GameScreenStyles.ButtonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}