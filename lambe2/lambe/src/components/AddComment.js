import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback as TWF, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import lang from "../../lang/lang";

class AddComment extends Component {
    state = {
        comment: "",
        editMode: false
    }

    handleAddComment = () => {
        Alert.alert("Adicionado!", this.state.comment);
    }

    render() {
        let commentArea = null;

        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput 
                        placeholder={lang.post.addComment}
                        style={styles.input}
                        autoFocus={true}
                        value={this.state.comment || ""}
                        onChange={comment => this.setState({ comment })}
                        onSubmitEditing={this.handleAddComment}
                    />
                    <TWF onPress={() => this.setState({ editMode: false })}>
                        <Icon name="times" size={15} color="#555" />
                    </TWF>
                </View>
            )
        } else {
            commentArea = (
                <TWF onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name="comment" size={25} color="#555" />
                        <Text style={styles.caption}>{lang.post.addCommentButton}</Text>
                    </View>
                </TWF>
            )
        }

        return (
            <View style={{ flex: 1 }}>{commentArea}</View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: "#ccc"
    },
    input: {
        width: "90%"
    }
});

export default AddComment;
