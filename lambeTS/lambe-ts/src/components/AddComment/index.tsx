import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import { useLang } from "../../contexts/lang";
import { X, ChatTeardropText } from "phosphor-react-native";

import styles from "./styles";
import { useState } from "react";
import { usePosts } from "../../contexts/posts";

interface AddCommentProps {
    postId: number;
}

export default function AddComment({ postId }: AddCommentProps) {
    const { handleAddComment } = usePosts();
    const { lang } = useLang();

    const [comment, setComment] = useState("");
    const [editMode, setEditMode] = useState(false);

    if (editMode) {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <TextInput
                        placeholder={lang.feed.post.add_comment_placeholder}
                        style={styles.input}
                        autoFocus
                        value={comment}
                        onChangeText={comment => setComment(comment)}
                        onSubmitEditing={() => {
                            handleAddComment(postId, comment);
                            setComment("");
                            setEditMode(false);
                        }}
                    />
                    <TouchableOpacity onPress={() => setEditMode(false)}>
                        <X size={15} color="#555" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    } else {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => setEditMode(true)}>
                    <View style={styles.container}>
                        <ChatTeardropText size={25} color="#555" weight="light" />
                        <Text style={styles.caption}>{lang.feed.post.add_comment_placeholder}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
