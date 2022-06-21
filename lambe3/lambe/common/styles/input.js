import { Dimensions } from "react-native";
import Fonts from "./Fonts";
import Palette from "./Palette/Palette";

export default {
    backgroundColor: Palette.background2,
    padding: 15,
    borderRadius: 12,
    fontFamily: Fonts.input,
    color: Palette.text,
    fontSize: 16,
    width: Dimensions.get("window").width - 40
}
