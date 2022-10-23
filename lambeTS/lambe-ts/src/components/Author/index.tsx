import {
    View,
    Text
} from "react-native";
import { Gravatar } from "react-native-gravatar";

import styles from "./styles";

interface AuthorProps {
    email: string;
    nickname: string;
}

export default function Author({ email, nickname }: AuthorProps) {
    return (
        <View style={styles.container}>
            <Gravatar options={{ email, secure: true }} style={styles.avatar} />
            <Text style={styles.nickname}>{nickname}</Text>
        </View>
    );
}
