import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width * 3 / 4,
        resizeMode: "contain"
    }
});
