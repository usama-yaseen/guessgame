import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    // marginTop: StatusBarManager.HEIGHT,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "blue",
  },
  BoardContainer: {
    alignItems: "center",
  },
});
export const MenuStyles = StyleSheet.create({
  Welcome: {
    fontSize: 48,
    color: "white",
    textAlign: "center",
    textShadowColor: "red",
    textShadowRadius: 10,
  },
  touchButton: {
    backgroundColor: "skyblue",
    borderRadius: 40,
    padding: 10,
    marginHorizontal: "20%",
    alignItems: "center",
  },
  touchButtonstext: {
    fontSize: 32,
    color: "black",
    fontFamily: "sans-serif-light",
  },
});
export const GameScreenStyles = StyleSheet.create({
  NumPadContainer: {
    alignItems: "center",
  },
  NUMS: {
    borderWidth: .5,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonText: {
    fontSize: 32,
  },
  Row: {
    flexDirection: "row",
  },
});
export const EndScreenStyles = StyleSheet.create({
  container: {
    borderWidth: 10,
    flex: 1,
    width: "100%",
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  resultContainer: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
  },
  resultHeading: { alignItems: "center", width: "100%" },
  resultContent: {
    fontSize: 48,
    color: "black",
  },
  touchButton: (bg) => {
    return {
      backgroundColor: bg,
      borderRadius: 40,
      padding: 10,
      alignItems: "center",
      width: "70%",
      marginVertical: "5%",
    };
  },
  touchButtonstext: {
    fontSize: 32,
    color: "black",
    fontFamily: "sans-serif-light",
  },
});
