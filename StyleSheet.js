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

  GameContainer: { flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' },
  GameStats: {
    alignSelf: "flex-end", textAlign: 'center', width: "100%", color: 'white', textShadowColor: "red",
    textShadowRadius: 10,
    fontSize: 24, fontWeight: 'bold', borderWidth: .9, borderColor: 'white', borderRadius: 50
  },
  UserInput: { borderWidth: 3, borderColor: 'white', borderRadius: 50, width: '100%', fontSize: 64, elevation: 5, textAlign: 'center', color: 'white' },
  ButtonsContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: "3%",
    marginBottom: '5%',
    marginTop: '5%',
  }
  , button: (bg) => {
    return {
      backgroundColor: bg,
      borderRadius: 50,
      padding: 10,
      width: "30%",
      alignItems: "center",
    }
  }
});
export const EndScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  resultContainer: {
    width: "80%",
    height: "50%",
    justifyContent: "center",
    elevation: 5,
    marginBottom: '15%'
  },
  resultHeading: { alignItems: "center", width: "100%" },
  resultContent: {
    fontSize: 64,
    color: "white",
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
    borderColor: 'white',
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
      width: 70,
      height: 70,
      borderRadius: 40,
      borderColor: 'white',
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
    };
  },
  ButtonText: {
    fontSize: 48,
    color: 'white',
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
