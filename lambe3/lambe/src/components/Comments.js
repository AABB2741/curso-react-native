import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import Fonts from "../../common/styles/Fonts";
import Palette from "../../common/styles/Palette/Palette";
import lang from "../../lang/lang";

class Comments extends Component {
    render() {
        let view = null;

        if (this.props.comments) {
            view = this.props.comments.map((item, index) => {
                return (
                    <View style={styles.commentContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname || lang.user.altname}: </Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </View>
                )
            });
        }

        return (
            <View style={styles.container}>
                {view}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    commentContainer: {
        flexDirection: "row",
        marginTop: 5
    },
    nickname: {
        marginLeft: 5,
        color: Palette.post.nickname,
        fontFamily: Fonts.feed.post.comment.author
    },
    comment: {
        color: Palette.post.comment,
        fontFamily: Fonts.feed.post.comment.text
    }
});

export default Comments;
