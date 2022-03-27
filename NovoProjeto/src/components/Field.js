import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default ({ texto, placeholder }) => {
    return (
        <View>
            <Text>{texto}</Text>
            <TextInput placeholder={placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({

});
