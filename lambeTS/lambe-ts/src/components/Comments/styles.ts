import {
    StyleSheet,
    Dimensions
} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    commentContainer: {
        flexDirection: "row",
        marginTop: 5
    },
    nickname: {
        marginLeft: 5,
        fontWeight: "bold",
        color: "#444"
    },
    comment: {
        color: "#555"
    }
});
