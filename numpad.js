import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <View
          style={[
            styles.btnContainerMiddle,
            { height: "75%", alignItems: "flex-end" },
          ]}
        >
          <TouchableOpacity style={styles.button}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { marginRight: 30 }]}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>7</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainerMiddle}>
          <TouchableOpacity style={styles.button}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>0</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.btnContainerMiddle,
            { height: "75%", alignItems: "flex-start" },
          ]}
        >
          <TouchableOpacity style={[styles.button]}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { marginLeft: 30 }]}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>9</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "grey",
    width: 350,
    height: 350,
    borderRadius: 200,
    alignItems: "center",
  },
  btnContainerMiddle: {
    height: "100%",
    justifyContent: "space-evenly",
    marginHorizontal: "3.5%",
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});