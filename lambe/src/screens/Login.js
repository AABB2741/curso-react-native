import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";
import lang from "../../lang/lang";

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    login = () => {
        this.props.navigation.navigate("Profile");
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder={lang.sign.form.email} style={styles.input} autoFocus={true} keyboardType="email-address" value={this.state.email} onChangeText={email => this.setState({ email })} />
                <TextInput placeholder={lang.sign.form.password} style={styles.input}  secureTextEntry={true} value={this.state.password} onChangeText={password => this.setState({ password })}/>
                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>{lang.sign.form.login}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Register") }} style={styles.button}>
                    <Text style={styles.buttonText}>{lang.sign.form.signup}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f7fd"
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: "#1e90ff"
    },
    buttonText: {
        fontSize: 20,
        color: "#fff"
    },
    input: {
        marginTop: 20,
        width: "90%",
        backgroundColor: "#fff",
        height: 40,
        borderRadius: 12
    }
});

export default Login;
