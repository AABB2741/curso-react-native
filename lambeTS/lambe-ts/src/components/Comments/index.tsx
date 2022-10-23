import { useState } from "react";
import {
    View,
    Text,
    Alert
} from "react-native";

import styles from "./styles";

import IComment from "../../interfaces/Comment";

interface CommentsProps {
    comments: IComment[];
}

export default function Comments({ comments }: CommentsProps ) {
    return (
        <View style={styles.container}>
            { comments && comments.map((item, index) => (
                <View style={styles.commentContainer} key={index}>
                    <Text style={styles.nickname}>{item.nickname}: </Text>
                    <Text style={styles.comment}>{item.comment}</Text>
                </View>
            )) }
        </View>
    );
}
