import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ImageBackground,
  View
} from 'react-native';
import { AppStyles } from './StyleSheet';
import { EndScreen } from './EndScreen';
import { GameScreen } from './GameScreen';
import { MainMenu} from './MainScreen';



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