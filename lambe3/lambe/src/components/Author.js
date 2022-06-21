import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Gravatar } from "react-native-gravatar";
import Fonts from "../../common/styles/Fonts";
import Palette from "../../common/styles/Palette/Palette";

import lang from "../../lang/lang";

export default props => {
    return (
        <View style={styles.container}>
            <Gravatar options={{ email: props.email, secure: true }} style={styles.avatar} />
            <Text style={styles.nickname}>{props.nickname || lang.user.altname}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 15
    },
    nickname: {
        color: Palette.post.nickname,
        marginVertical: 10,
        fontSize: 15,
        fontFamily: Fonts.feed.post.author
    }
})
