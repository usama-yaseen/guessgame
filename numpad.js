import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={NumpadStyles.container}>
      <View style={NumpadStyles.btnContainer}>
        <View
          style={[
            NumpadStyles.btnContainerMiddle,
            { height: "75%", alignItems: "flex-end" },
          ]}
        >
          <TouchableOpacity style={NumpadStyles.button}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[NumpadStyles.button, { marginRight: 30 }]}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={NumpadStyles.button}>
            <Text>7</Text>
          </TouchableOpacity>
        </View>
        <View style={NumpadStyles.btnContainerMiddle}>
          <TouchableOpacity style={NumpadStyles.button}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[NumpadStyles.button]}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[NumpadStyles.button]}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={NumpadStyles.button}>
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            NumpadStyles.btnContainerMiddle,
            { height: "75%", alignItems: "flex-start" },
          ]}
        >
          <TouchableOpacity style={[NumpadStyles.button]}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[NumpadStyles.button, { marginLeft: 30 }]}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={NumpadStyles.button}>
            <Text>9</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

