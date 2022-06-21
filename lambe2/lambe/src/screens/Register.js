import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";
import lang from "../../lang/lang";

class Register extends Component {
    state = {
        name: "",
        email: "",
        password: ""
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder={lang.sign.form.nickname} style={styles.input} autoFocus={true} value={this.state.name} onChangeText={name => this.setState({ name })} />
                <TextInput placeholder={lang.sign.form.email} style={styles.input} keyboardType="email-address" value={this.state.email} onChangeText={email => this.setState({ email })} />
                <TextInput placeholder={lang.sign.form.password} style={styles.input} secureTextEntry={true} value={this.state.password} onChangeText={email => this.setState({ password })} />
                <TouchableOpacity onPress={() => {  }} style={styles.button}>
                    <Text style={styles.buttonText}>{lang.sign.form.save}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: "#1e90ff",
        borderRadius: 12
    },
    buttonText: {
        fontSize: 20,
        color: "#fff"
    },
    input: {
        backgroundColor: "#fff",
        marginTop: 20,
        width: "90%",
        height: 40,
        borderRadius: 12,
        paddingLeft: 15
    }
});

export default Register;
