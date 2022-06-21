import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Gravatar } from "react-native-gravatar";

export default props => {
    return (
        <View style={styles.container}>
            <Gravatar options={{email: props.email, secure: true}} style={styles.avatar} />
            <Text style={styles.nickname}>{props.nickname}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 15
    },
    nickname: {
        color: "#444",
        marginVertical: 10,
        fontSize: 16,
        fontFamily: "Exo2-Bold"
    }
});