import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from "react-native";
import { useLang } from "../../contexts/lang";

import styles from "./styles";

export default function Register() {
    const { lang } = useLang();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={lang.profile.form.name}
                style={styles.input}
                autoFocus
                value={name}
                onChangeText={name => setName(name)}
            />
            <TextInput
                placeholder={lang.profile.form.email}
                style={styles.input}
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                placeholder={lang.profile.form.password}
                style={styles.input}
                secureTextEntry
                value={password}
                onChangeText={password => setPassword(password)}
            />
            <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.buttonText}>{lang.profile.form.save}</Text>
            </TouchableOpacity>
        </View>
    );
}
