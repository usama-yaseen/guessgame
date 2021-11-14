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
    <View
      style={{
        borderWidth: 1,
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: "10%",
      }}
    >
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
          props.addScore(false);
          props.setModalVisible(true);
        }}
        activeOpacity={0.5}
        style={{
          backgroundColor: "skyblue",
          borderRadius: 50,
          padding: 10,
          width: "30%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, color: "black" }}>Hint</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("Length ="+props.UserInpt.length);
          if(props.UserInpt.length==0){
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
          if (props.Tries == 0) {
            console.log("here");
            props.changeEndScreen(true);
          }
        }}
        activeOpacity={0.5}
        style={{
          backgroundColor: "green",
          borderRadius: 50,
          padding: 10,
          width: "30%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 24, color: "black" }}>Guess</Text>
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
        console.log(props.text), props.enterNum(props.text);
      }}
    >
      <Text style={NumpadStyles.ButtonText}>{props.text}</Text>
    </TouchableOpacity>
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
          <NumPadButton text="1" enterNum={props.enterNum}></NumPadButton>
          <NumPadButton
            text="4"
            margRight={30}
            enterNum={props.enterNum}
          ></NumPadButton>
          <NumPadButton text="7" enterNum={props.enterNum}></NumPadButton>
        </View>
        <View style={NumpadStyles.btnContainerMiddle}>
          <NumPadButton text="2" enterNum={props.enterNum}></NumPadButton>
          <NumPadButton text="5" enterNum={props.enterNum}></NumPadButton>
          <NumPadButton text="8" enterNum={props.enterNum}></NumPadButton>
          <NumPadButton text="0" enterNum={props.enterNum}></NumPadButton>
        </View>
        <View
          style={[
            NumpadStyles.btnContainerMiddle,
            { height: "75%", alignItems: "flex-start" },
          ]}
        >
          <NumPadButton text="3" enterNum={props.enterNum}></NumPadButton>
          <NumPadButton
            text="6"
            margLeft={30}
            enterNum={props.enterNum}
          ></NumPadButton>
          <NumPadButton text="9" enterNum={props.enterNum}></NumPadButton>
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

  const [Tries, setTries] = React.useState(5);

  const [UserInpt, setUserInput] = React.useState("");
  const enterNum = (x) => setUserInput(UserInpt + x);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [HintContent, AddHint] = React.useState("");
  return (
    <View
      style={{
        borderWidth: 1,
        flex: 1,
        width: "100%",
        borderColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Text style={{ alignSelf: "center", width: "100%" }}>
          Score = {Score}
        </Text>
        <Text style={{ alignSelf: "center", width: "100%" }}>
          Tries Left = {Tries}
        </Text>
        <Text style={{ alignSelf: "center", width: "100%" }}>
          Rounds = {Round}
        </Text>
      </View>
      <Text>{UserInpt}</Text>
      {console.log(props.Hints)}
      <Move
        Hints={props.Hints}
        takeHint={props.takeHint}
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
      />
      <NumPad enterNum={enterNum} />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={modalStyles.container}>
          <View style={modalStyles.ModalBody}>
            <Text style={modalStyles.ModalResultText}>{HintContent}</Text>
            <TouchableOpacity
              style={modalStyles.Okay}
              onPress={() => {
                return setModalVisible(false);
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
