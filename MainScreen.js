import React from 'react';
import {
  TouchableOpacity,
  ToastAndroid,
  Text,
  View
} from 'react-native';
import { MenuStyles } from './StyleSheet';

const AppButton = (props) => {
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
  
  export const MainMenu = (props) => {
    return (
      <View>
        <Text style={MenuStyles.Welcome}>
          Welcome To
          <Text style={{ fontStyle: 'normal' }}>
            Guess The NUMBER
          </Text>
        </Text>
        <AppButton text="Play Game" setMenuState={props.setMenuState} />
      </View>)
  }
  