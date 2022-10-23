import {
    View,
    Text,
    Platform,
    Image
} from "react-native";
import icon from "../../../assets/imgs/icon.png";
import { useLang } from "../../contexts/lang";

import styles from "./styles";

export default function Header() {
    const { lang } = useLang();

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image
                    source={icon}
                    style={styles.image}
                />
                <Text style={styles.title}>{lang.appName}</Text>
            </View>
        </View>
    );
}
