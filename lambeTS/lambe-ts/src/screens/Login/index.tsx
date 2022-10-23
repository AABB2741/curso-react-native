import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
} from "react-native";
import { useLang } from "../../contexts/lang";
import { useAuth } from "../../contexts/auth";

import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../@types/navigation";

type LoginProps = NativeStackScreenProps<AuthStackParamList, "Login">

export default function Login({ navigation }: LoginProps) {
    const { lang } = useLang();
    const { handleSignIn, handleSignOut } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={lang.profile.form.email}
                style={styles.input}
                autoFocus
                keyboardType="email-address"
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
            <TouchableOpacity onPress={() => handleSignIn(email, password)} style={styles.button}>
                <Text style={styles.buttonText}>{lang.profile.form.login}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.button}>
                <Text style={styles.buttonText}>{lang.profile.form.signup}</Text>
            </TouchableOpacity>
        </View>
    );
}
