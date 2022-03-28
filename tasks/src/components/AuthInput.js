import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import commonStyles from "../commonStyles.json";

export default props => {
    return (
        <View style={[styles.container, props.style]}>
            <Icon name={props.icon} size={20} style={styles.icon} />
            <TextInput {...props} style={styles.input} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: commonStyles.backgrounds.secondary,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        color: "#333",
        marginLeft: 20
    },
    input: {
        marginLeft: 20,
        width: "70%"
    }
});
