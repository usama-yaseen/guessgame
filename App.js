import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  ToastAndroid,
  Text,
  View
} from 'react-native';
import { AppStyles } from './StyleSheet';
import { EndScreen } from './EndScreen';
import { GameScreen } from './GameScreen';

const GameButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          ToastAndroid.show("Touchedddd ", ToastAndroid.SHORT);
          props.setMenuState(false);
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

const MainMenu = (props) => {
  return (
    <View>
      <Text style={MenuStyles.Welcome}>
        Welcome To
        <Text style={{ fontStyle: 'normal' }}>
          Guess The NUMBER
        </Text>
      </Text>
      <GameButton text="Play Game" setMenuState={props.setMenuState} />
    </View>)
}


export default function App() {
  const [Menu, ChangeScreen] = React.useState(false);
  const [End, changeEndScreen] = React.useState(true);

  return (
    <View style={AppStyles.container}>
      <ImageBackground resizeMode="contain" style={AppStyles.image}>
        {!Menu && !End && <GameScreen changeEndScreen={changeEndScreen} setMenuState={ChangeScreen} />}
        {Menu && <MainMenu setMenuState={ChangeScreen} />}
        {!Menu && End && <EndScreen text="Menu" changeEndScreen={changeEndScreen} setMenuState={ChangeScreen} />}
      </ImageBackground>
      <StatusBar hidden />
    </View>
  );
}