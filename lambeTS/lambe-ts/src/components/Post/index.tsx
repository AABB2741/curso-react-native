import {
    View,
    Image
} from "react-native";

import styles from "./styles";

import Author from "../Author";
import Comments from "../Comments";
import AddComment from "../AddComment";

import IPost from "../../interfaces/Post";

export default function Post({ email, nickname, comments, image }: IPost) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Author email={email} nickname={nickname} />
            <Comments comments={comments} />
            <AddComment />
        </View>
    );
}
