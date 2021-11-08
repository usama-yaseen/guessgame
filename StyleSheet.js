import {
    StyleSheet,
} from 'react-native';

export const AppStyles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        // marginTop: StatusBarManager.HEIGHT,
    },
    image: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderWidth: 2,
        borderColor: 'blue',
    },
    BoardContainer: {
        alignItems: "center",
    },
});
export const MenuStyles = StyleSheet.create({
    Welcome: {
        fontSize: 48,
        fontStyle: 'normal',
    },
    touchButton: {
        backgroundColor: "skyblue",
        borderRadius: 40,
        padding: 10,
        alignItems: "center",
    },
    touchButtonstext: {
        fontSize: 32,
        color: "black",
        fontFamily: "sans-serif-light",
    }
});
export const GameScreenStyles = StyleSheet.create({
    NumPadContainer: {
        alignItems: "center",
    },
    NUMS: {
        borderWidth: 2,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
    },
    ButtonText: {
        fontSize: 32,
    },
    Row: {
        flexDirection: "row",
    },
})