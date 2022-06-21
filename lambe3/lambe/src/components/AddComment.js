import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import input from "../../common/styles/input";
import Palette from "../../common/styles/Palette/Palette";
import lang from "../../lang/lang";

class AddComment extends Component {
    state = {
        comment: "",
        editMode: false
    }

    handleAddComment = () => {
        Alert.alert("Adicionado", this.state.comment);
    }

    render() {
        let commentArea = null;

        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput
                        placeholder={lang.feed.post.addComment.placeholder}
                        style={styles.input}
                        autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        onSubmitEditing={this.handleAddComment}
                    />
                    <TWF onPress={() => this.setState({ editMode: false })}>
                        <Icon name="times" size={15} color={Palette.post.addComment.button} />
                    </TWF>
                </View>
            );
        } else {
            commentArea = (
                <TWF onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name="comment" size={25} color={Palette.post.addComment.button} />
                        <Text style={styles.caption}>{lang.feed.post.addComment.caption}</Text>
                    </View>
                </TWF>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                {commentArea}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        margin: 15
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: Palette.post.addComment.caption
    },
    input: {
        ...input,
        width: "90%"
    }
});

export default AddComment;
