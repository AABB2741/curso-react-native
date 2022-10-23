import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import { Gravatar } from "react-native-gravatar";
import { useAuth } from "../../contexts/auth";
import { useLang } from "../../contexts/lang";

import styles from "./styles";

export default function Profile() {
    const { lang } = useLang();
    const { user, handleSignOut } = useAuth();

    return (
        <View style={styles.container}>
            <Gravatar
            style={styles.avatar}
                options={{ email: user?.email, secure: true }}
            />
            <Text style={styles.nickname}>{user?.name ?? lang.anonymous}</Text>
            <Text style={styles.email}>{user?.email}</Text>
            <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                <Text style={styles.buttonText}>{lang.profile.logout}</Text>
            </TouchableOpacity>
        </View>
    );
}
