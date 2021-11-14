import React from "react";
import {
    TouchableOpacity,
    ToastAndroid,
    Text,
    View,
    Modal,
} from "react-native";
import { GameScreenStyles } from "./StyleSheet";
import { MenuStyles } from "./StyleSheet";
import { NumpadStyles } from "./StyleSheet";
import { EndScreenStyles } from "./StyleSheet";
import { modalStyles } from "./StyleSheet";

const Move = (props) => {
    return (
        <View style={GameScreenStyles.ButtonsContainer}>
            <TouchableOpacity
                onPress={() => {
                    if (props.Hints == 0) {
                        if (props.Number % 2 == 0) {
                            props.AddHint("The Number is EVEN");
                        } else {
                            props.AddHint("The Number is ODD");
                        }
                    } else {
                        var x = 0;
                        do {
                            x = Math.floor(Math.random() * 20) + 1;
                        } while (x == props.Number);

                        if (x > props.Number) {
                            props.AddHint(`The Number is less than ${x}`);
                        } else {
                            props.AddHint(`The Number is greater than ${x}`);
                        }
                    }
                    props.takeHint(props.Hints + 1);
                    props.setTotalHint(props.TotalHints + 1)
                    props.addScore(false);
                    props.setModalVisible(true);
                }}
                activeOpacity={0.5}
                style={GameScreenStyles.button('skyblue')}>
                <Text style={{ fontSize: 24, color: "black" }}>Hint</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    console.log("Length =" + props.UserInpt.length);
                    if (props.UserInpt.length == 0) {
                        ToastAndroid.show("Kindly Enter SOME NUMBER!", ToastAndroid.SHORT);
                    }
                    else if (parseInt(props.UserInpt) == props.Number) {
                        ToastAndroid.show("Correct Guess", ToastAndroid.SHORT);
                        //Pop Up A Modal
                        console.log("Correct GUESS!");
                        props.setUserInput("");
                        props.addScore(true);
                        props.changeEndScreen(true);
                    } else {
                        ToastAndroid.show("Wrong Guess", ToastAndroid.SHORT);
                        props.setUserInput("");
                        props.setTries(props.Tries - 1);
                    }
                    if (props.Tries == 1) {
                        console.log("here in the modal");
                        props.AddHint("You Lose!\nThe Correct Guess Was " + props.Number);
                        props.setModalVisible(true);
                        props.setOver(true);
                    }
                }}
                activeOpacity={0.5}
                style={GameScreenStyles.button('green')}>
                <Text style={{ fontSize: 24, color: "black" }}>Guess</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => props.setUserInput(props.UserInpt.substring(0, props.UserInpt.length - 1))}
                activeOpacity={0.5}
                style={GameScreenStyles.button('white')}>
                <Text style={{ fontSize: 24, color: "black" }}>Remove</Text>
            </TouchableOpacity>
        </View>
    );
};
const NumPadButton = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={NumpadStyles.button(props.margLeft, props.margRight)}
            onPress={() => {
                if (props.UserInpt.length == 2) {
                    ToastAndroid.show("Max 2 Digit Numbers Allowed!", ToastAndroid.SHORT);
                }
                else {
                    props.enterNum(props.text);
                }
            }}
        >
            <Text style={NumpadStyles.ButtonText}>{props.text}</Text>
        </TouchableOpacity >
    );
};
const NumPad = (props) => {
    return (
        <View>
            <View style={NumpadStyles.btnContainer}>
                <View
                    style={[
                        NumpadStyles.btnContainerMiddle,
                        { height: "75%", alignItems: "flex-end" },
                    ]}
                >
                    <NumPadButton text="1" UserInpt={props.UserInpt} enterNum={props.enterNum}></NumPadButton>
                    <NumPadButton
                        text="4"
                        margRight={30}
                        UserInpt={props.UserInpt} enterNum={props.enterNum}
                    ></NumPadButton>
                    <NumPadButton text="7" UserInpt={props.UserInpt} enterNum={props.enterNum}></NumPadButton>
                </View>
                <View style={NumpadStyles.btnContainerMiddle}>
                    <NumPadButton text="2" UserInpt={props.UserInpt} enterNum={props.enterNum}></NumPadButton>
                    <NumPadButton text="5" UserInpt={props.UserInpt} enterNum={props.enterNum}></NumPadButton>
                    <NumPadButton text="8" UserInpt={props.UserInpt} enterNum={props.enterNum}></NumPadButton>
                    <NumPadButton text="0" UserInpt={props.UserInpt} enterNum={props.enterNum}></NumPadButton>
                </View>
                <View
                    style={[
                        NumpadStyles.btnContainerMiddle,
                        { height: "75%", alignItems: "flex-start" },
                    ]}
                >
                    <NumPadButton text="3" UserInpt={props.UserInpt} enterNum={props.enterNum}></NumPadButton>
                    <NumPadButton
                        text="6"
                        margLeft={30}
                        UserInpt={props.UserInpt} enterNum={props.enterNum}
                    ></NumPadButton>
                    <NumPadButton text="9" UserInpt={props.UserInpt} enterNum={props.enterNum}></NumPadButton>
                </View>
            </View>
        </View>
    );
};
export const GameScreen = (props) => {
    const [Number, setNumber] = React.useState(
        Math.floor(Math.random() * 20) + 1
    );
    console.log(Number);
    const Score = props.Score;
    const addScore = props.addScore;
    const Round = props.Round;

    const [over, setOver] = React.useState(false);
    const [Tries, setTries] = React.useState(5);

    const [UserInpt, setUserInput] = React.useState("");
    const enterNum = (x) => setUserInput(UserInpt + x);

    const [modalVisible, setModalVisible] = React.useState(false);
    const [HintContent, AddHint] = React.useState("");
    return (
        <View style={GameScreenStyles.GameContainer}>
            <Text style={MenuStyles.Welcome}>
                Guess {"\n"}The NUMBER
            </Text>
            <View style={{ width: '100%', flexDirection: 'row', marginVertical: '10%' }}>
                <View style={{ width: '40%' }}>
                    <Text style={GameScreenStyles.GameStats}>
                        Score : {Score}
                    </Text>
                    <Text style={GameScreenStyles.GameStats}>
                        Tries Left : {Tries}
                    </Text>
                    <Text style={GameScreenStyles.GameStats}>
                        Rounds : {Round}
                    </Text>
                </View>
                <View style={{ width: '60%' }}>
                    <Text style={GameScreenStyles.UserInput}>{UserInpt}</Text>
                </View>
            </View>
            {console.log(props.Hints)}
            <Move
                setUserInput={setUserInput}
                UserInpt={UserInpt}
                Hints={props.Hints}
                takeHint={props.takeHint}
                setTotalHint={props.setTotalHint}
                TotalHints={props.TotalHints}
                AddHint={AddHint}
                setTries={setTries}
                addScore={addScore}
                Tries={Tries}
                Number={Number}
                UserInpt={UserInpt}
                setUserInput={setUserInput}
                changeEndScreen={props.changeEndScreen}
                setMenuState={props.setMenuState}
                setModalVisible={setModalVisible}
                setOver={setOver}
            />
            <NumPad UserInpt={UserInpt} enterNum={enterNum} />

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={modalStyles.container}>
                    <View style={modalStyles.ModalBody}>
                        <Text style={modalStyles.ModalResultText}>{HintContent}</Text>
                        <TouchableOpacity
                            style={modalStyles.Okay}
                            onPress={() => {
                                setModalVisible(false);
                                if (over) {
                                    setOver(false);
                                    props.changeEndScreen(true);
                                }
                            }}
                        >
                            <Text style={modalStyles.modalButtonText}>✔</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};