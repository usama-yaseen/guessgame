import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, View } from "react-native";
import { AppStyles } from "./StyleSheet";
import { EndScreen } from "./EndScreen";
import { GameScreen } from "./GameScreen";
import { MainMenu } from "./MainScreen";

export default function App() {
  const [Menu, ChangeScreen] = React.useState(true);
  const [End, changeEndScreen] = React.useState(false);
  const [Score, setScore] = React.useState(0);
  const addScore = (op) => {
    if (op) {
      setScore(Score + 10);
    } else {
      setScore(Score - 2);
    }
  };
  const [Hints,takeHint]=React.useState(0);
  const [Round, setRound] = React.useState(1);

  return (
    <View style={AppStyles.container}>
      <ImageBackground resizeMode="contain" style={AppStyles.image}>
        {!Menu && !End && (
          <GameScreen
            addScore={addScore}
            Score={Score}
            Round={Round}
            Hints={Hints}
            takeHint={takeHint}
            changeEndScreen={changeEndScreen}
            setMenuState={ChangeScreen}
          />
        )}

        {Menu && <MainMenu setMenuState={ChangeScreen} />}

        {!Menu && End && (
          <EndScreen
            changeEndScreen={changeEndScreen}
            setMenuState={ChangeScreen}
            Hints={Hints}
            takeHint={takeHint}
            Score={Score}
            setScore={setScore}
            Round={Round}
            setRound={setRound}
          />
        )}
      </ImageBackground>
      <StatusBar hidden />
    </View>
  );
}
