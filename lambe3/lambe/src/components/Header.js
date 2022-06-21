import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from "react-native";

import icon from "../../assets/imgs/icon.png";
import Fonts from "../../common/styles/Fonts";
import Palette from "../../common/styles/Palette/Palette";
import lang from "../../lang/lang";

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>{lang.appName}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == "ios" ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: Palette.border,
        width: "100%"
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
        color: Palette.title,
        fontFamily: Fonts.appFont,
        height: 30,
        fontSize: 28
    }
});

export default Header;