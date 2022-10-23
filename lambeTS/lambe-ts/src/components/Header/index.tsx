import {
    View,
    Text,
    Platform,
    Image
} from "react-native";
import icon from "../../../assets/imgs/icon.png";
import { useLang } from "../../contexts/lang";
import { Gravatar } from "react-native-gravatar";
import { useAuth } from "../../contexts/auth";

import styles from "./styles";

export default function Header() {
    const { user } = useAuth();
    const { lang } = useLang();

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image source={icon} style={styles.image} />
                <Text style={styles.title}>{lang.appName}</Text>
            </View>
            <View style={styles.userContainer}>
                <Text style={styles.user}>{user?.name || lang.anonymous}</Text>
                { user?.email && <Gravatar options={{ email: user.email, secure: true }} style={styles.avatar} /> }
            </View>
        </View>
    );
}
