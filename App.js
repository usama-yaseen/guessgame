import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ToastAndroid,
  Text,
  View
} from 'react-native';
const GameButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          ToastAndroid.show("Touchedddd ", ToastAndroid.SHORT);
          props.setGamestate(true);
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

const GameScreen = (props) => {
  const [UserInpt, setUserInput] = React.useState("");
  const enterNum = (x) => {
    console.log("Here"),
      setUserInput(UserInpt + x);
  }
  return (
    <View style={{ borderWidth: 1, borderColor: 'red' }}>
      <Text style={{ alignSelf: 'center', width: '100%' }}>
        {UserInpt}
      </Text>
      <NumPad enterNum={enterNum} />
      <GameButton text="Done" setGamestate={props.setGamestate} />
    </View>
  )
}
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
const GameScreenStyles = StyleSheet.create({
  NumPadContainer: {
    alignItems: "center",
  },
  NUMS: {
    borderWidth: 2,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  ButtonText: {
    fontSize: 32,
  },
  Row: {
    flexDirection: "row",
  },
})

const MainMenu = (props) => {
  return (
    <View>
      <Text style={MenuStyles.Welcome}>
        Welcome To
        <Text style={{ fontStyle: 'normal' }}>
          Guess The NUMBER
        </Text>
      </Text>
      <GameButton text="Play Game" setGamestate={props.setGamestate} />
    </View>)
}

export default function App() {
  const [gameState, setGamestate] = React.useState(false);

  return (
    <View style={AppStyles.container}>

      <ImageBackground resizeMode="contain" style={AppStyles.image}>
        {gameState && <GameScreen setGamestate={setGamestate} />}
        {!gameState && <MainMenu setGamestate={setGamestate} />}
      </ImageBackground>
      <StatusBar hidden />
    </View>
  );
}

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBarManager.HEIGHT,
  },
  image: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  }, BoardContainer: {
    alignItems: "center",
  },
});
const MenuStyles = StyleSheet.create({
  Welcome: {
    fontSize: 48,
    fontStyle: 'normal',
  },
  touchButton: {
    backgroundColor: "skyblue",
    borderRadius: 40,
    padding: 10,
    alignItems: "center",
  },
  touchButtonstext: {
    fontSize: 32,
    color: "black",
    fontFamily: "sans-serif-light",
  }
});