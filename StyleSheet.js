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
export const GameScreenStyles = StyleSheet.create({});
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
export const NumpadStyles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: 350,
    height: 350,
    borderRadius: 250,
    alignItems: "center",
    borderWidth: 2,
  },
  btnContainerMiddle: {
    height: "100%",
    justifyContent: "space-evenly",
    marginHorizontal: "3.5%",
  },
  button: (mL, mR) => {
    return {
      marginLeft: mL,
      marginRight: mR,
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
    };
  },
  ButtonText: {
    fontSize: 32,
  },
});
export const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalBody: {
    width: "80%",
    paddingHorizontal: 50,
    paddingVertical: 20,
    elevation: 100,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "white",
    opacity: 0.98,
    borderWidth: 0.8,
  },
  ModalResultText: {
    fontSize: 16,
    color: "black",
    marginBottom: 10,
  },
  Okay: {
    borderRadius: 40,
    backgroundColor: "green",
    justifyContent: "center",
    paddingBottom: 5,
    width: 50,
    height: 50,
  },
  modalButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
  },
});
