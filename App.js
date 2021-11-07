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
  return (
    <View>
      <Text>
        This is Some Text From the Game Screen
      </Text>
      <GameButton text="Done" setGamestate={props.setGamestate}/>
    </View>)
}
const MainMenu = (props) => {
  return (
    <View>
      <Text style={MenuStyles.Welcome}>
        Welcome To
        <Text style={{ fontStyle: 'normal' }}>
          Guess The NUMBER
        </Text>
      </Text>
      <GameButton text="Play Game" setGamestate={props.setGamestate}/>
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
    marginTop: "50%",
  },
  touchButtonstext: {
    fontSize: 32,
    color: "black",
    fontFamily: "sans-serif-light",
  }
});