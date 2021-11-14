import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { EndScreenStyles } from "./StyleSheet";

export const EndScreen = (props) => {
  return (
    <View style={EndScreenStyles.container}>
      <View style={EndScreenStyles.resultContainer}>
        <View style={EndScreenStyles.resultHeading}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>score</Text>
          <Text style={EndScreenStyles.resultContent}>{props.Score}</Text>
        </View>

        <View style={EndScreenStyles.resultHeading}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>rounds played</Text>
          <Text style={EndScreenStyles.resultContent}>{props.Round}</Text>
        </View>
        <View style={EndScreenStyles.resultHeading}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Negative Score From Hints</Text>
          <Text style={EndScreenStyles.resultContent}>{props.TotalHints * -2}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          props.changeEndScreen(false);
          props.setRound(props.Round + 1);
          props.takeHint(0);
        }}
        activeOpacity={0.5}
        style={EndScreenStyles.touchButton("skyblue")}
      >
        <Text style={EndScreenStyles.touchButtonstext}>Play Again</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.changeEndScreen(false);
          props.setMenuState(true);
          props.setRound(1);
          props.setScore(0);
          props.takeHint(0);
          props.setTotalHint(0);
        }}
        activeOpacity={0.5}
        style={EndScreenStyles.touchButton("crimson")}
      >
        <Text style={EndScreenStyles.touchButtonstext}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};
