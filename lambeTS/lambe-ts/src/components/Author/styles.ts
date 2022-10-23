import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    },
    nickname: {
        color: "#444",
        marginVertical: 10,
        fontSize: 15,
        fontWeight: "bold"
    }
});
