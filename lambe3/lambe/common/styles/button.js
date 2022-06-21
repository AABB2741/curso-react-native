import { Dimensions } from "react-native";
import Fonts from "./Fonts";
import Palette from "./Palette/Palette";

export default {
    default: {
        backgroundColor: Palette.accent,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 12
    },
    text: {
        color: Palette.buttonText,
        fontFamily: Fonts.button,
        fontSize: 20
    },
    inverted: {
        backgroundColor: "#00000000"
    },
    invertedText: {
        color: Palette.accent
    },
    large: {
        width: Dimensions.get("window").width - 40,
        alignItems: "center"
    }
}
