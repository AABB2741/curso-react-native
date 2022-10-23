import {
    StyleSheet,
    Dimensions,
    Platform
} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS == "ios" ? 30 : 10,
        fontWeight: "bold"
    },
    imageContainer: {
        width: "100%",
        backgroundColor: "#eee",
        padding: 10
    },
    image: {
        width: "100%",
        resizeMode: "contain",
        aspectRatio: 1,
        maxHeight: 200,
        alignSelf: "center"
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: "#1e90ff"
    },
    buttonText: {
        fontSize: 20,
        color: "#fff"
    },
    input: {
        marginTop: 20,
        flex: 1
    }
});
