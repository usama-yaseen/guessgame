import React from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import { MenuStyles } from './StyleSheet';

export const EndScreen = (props) => {
    return (
        <View style={{ borderWidth: 10, flex: 1, width: '100%', borderColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
                onPress={() => {
                    props.changeEndScreen(false)
                    props.setMenuState(true);
                }}
                activeOpacity={0.5}
                style={{
                    backgroundColor: "skyblue",
                    borderRadius: 40,
                    padding: 10,
                    alignItems: "center",
                    width: '50%'
                }}
            >
                <Text style={MenuStyles.touchButtonstext}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}