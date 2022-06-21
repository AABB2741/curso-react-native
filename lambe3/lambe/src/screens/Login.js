import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";
import button from "../../common/styles/button";
import Fonts from "../../common/styles/Fonts";
import input from "../../common/styles/input";
import Palette from "../../common/styles/Palette/Palette";
import lang from "../../lang/lang";

import * as Screen from "../Screen";

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    login = () => {
        this.props.navigation.navigate(Screen.Profile);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{lang.sign.login}</Text>
                <TextInput
                    placeholder={lang.sign.form.email}
                    style={styles.input}
                    autoFocus={true}
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    placeholder={lang.sign.form.password}
                    style={styles.input}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>{lang.sign.login}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate(Screen.Register)}} style={{...styles.button, ...button.inverted}}>
                    <Text style={{...styles.buttonText, ...button.invertedText}}>{lang.sign.signup}</Text>
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
    title: {
        fontFamily: Fonts.title,
        fontSize: 30,
        color: Palette.text,
        marginBottom: 15
    },
    button: {
        ...button.default,
        ...button.large,
        marginTop: 30
    },
    buttonText: {
        ...button.text
    },
    input: {
        ...input,
        marginTop: 20
    }
});

export default Login;
