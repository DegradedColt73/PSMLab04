import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    keyboardArea: {
        flex: 1,
        flexDirection: "column",
    },
    keyboardRow: {
        flex: 1,
        flexDirection: "row",
    },
    firstKeyboardRow: {
        justifyContent: "space-between",
    },
    keyboardButton: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "25%",
    },
});