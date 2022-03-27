import React from "react";
import { View } from "react-native";

export default props => {
    return (
        <View style={{
            height: props.lado || 50,
            width: props.lado || 50,
            backgroundColor: props.cor || "#000"
        }}/>
    );
}
