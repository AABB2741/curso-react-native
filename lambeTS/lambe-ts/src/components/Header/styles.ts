import { StyleSheet } from "react-native";
import {
    Platform
} from "react-native";

export default StyleSheet.create({
    container: {
        width: "100%",
        marginTop: Platform.OS == "ios" ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#bbb",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: "contain"
    },
    title: {
        color: "#000",
        fontFamily: "shelter",
        height: 30,
        fontSize: 26
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    user: {
        fontSize: 10,
        color: "#888"
    },
    avatar: {
        width: 30,
        height: 30,
        marginLeft: 10,
        borderRadius: 15
    }
});
