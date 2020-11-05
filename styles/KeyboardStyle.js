import {
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback} from 'react-native';

    const screenWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    keyboardArea: {
        flex: 1,
        flexDirection: "column",
    },
    keyboardRow: {
        flex: 1,
        flexDirection: "row",
    },
    keyboardButton: {
        backgroundColor: "#7D7E80",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        margin: 1,
    },
    keyboardZeroButton:{
        flex: 0,
        width: screenWidth / 2 - 2,
        alignItems: "flex-start",
        padding: screenWidth / 10,
    },
    hardRightColumnButton:{
        backgroundColor: "#F2A33C",
    },
    freeSpace:{
        width: screenWidth / 2 - 2,
        backgroundColor: "#626365",
        margin: 1,
    },
    textSetup:{
        color: "white",
        fontSize: 40,
        fontWeight: "500",
    }
});