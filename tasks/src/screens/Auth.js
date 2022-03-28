import React, { Component } from "react";
import { ImageBackground, Text, StyleSheet, View, TextInput, TouchableOpacity, Platform, Alert } from "react-native"

import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

import lang from "../../lang/lang";
import backgroundImage from "../../assets/imgs/login.jpg";
import commonStyles from "../commonStyles.json";
import AuthInput from "../components/AuthInput";

import { server, showError, showSuccess, showRequestError } from "../common";

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    stageNew: false
}

export default class Auth extends Component {
    state = {
        ...initialState
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            this.signup();
        } else {
            this.signin();
        }
    }

    signup = async () => {
        try {
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            });

            showSuccess(lang.success.signup_success);
            this.setState({ ...initialState });
        } catch (e) {
            showRequestError("email_already_in_use", e);
        }
    }

    signin = async () => {
        try {
            const res = await axios.post(`${server}/signin`, {
                email: this.state.email,
                password: this.state.password
            });

            AsyncStorage.setItem("userData", JSON.stringify(res.data));
            axios.defaults.headers.common["Authorization"] = `bearer ${res.data.token}`;
            this.props.navigation.navigate("Home", res.data);
        } catch (e) {
            showRequestError("wrong_email_or_password", e);
        }
    }
    
    render() {
        const validations = [];
        validations.push(this.state.email && this.state.email.includes("@"));
        validations.push(this.state.password && this.state.password.length >= 6);
        
        if (this.state.stageNew) {
            validations.push(this.state.name && this.state.name.trim().length >= 3);
            validations.push(this.state.confirmPassword);
            validations.push(this.state.confirmPassword === this.state.password);
        }

        const isFormValid = validations.reduce((t, a) => t && a);

        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>{lang.appName}</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? lang.auth.subtitle.signup : lang.auth.subtitle.login}
                    </Text>
                    {
                        this.state.stageNew &&
                        <AuthInput
                            icon="user"
                            placeholder={lang.auth.name}
                            value={this.state.name}
                            style={styles.input}
                            onChangeText={name => this.setState({ name })}
                        />
                    }
                    <AuthInput
                        icon="at"
                        placeholder={lang.auth.email}
                        value={this.state.email}
                        style={styles.input}
                        onChangeText={email => this.setState({ email })}
                    />
                    <AuthInput
                        icon="lock"
                        placeholder={lang.auth.password}
                        value={this.state.password}
                        style={styles.input}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry={true}
                    />
                    {
                        this.state.stageNew &&
                        <AuthInput
                            icon="asterisk"
                            placeholder={lang.auth.confirm_password}    
                            value={this.state.confirmPassword}
                            style={styles.input}
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}
                            secureTextEntry={true}
                        />
                    }
                    <TouchableOpacity onPress={this.signinOrSignup} disabled={!isFormValid}>
                        <View style={[styles.button, isFormValid ? {} : { backgroundColor: "#aaa" }]}>
                            <Text style={styles.buttonText}>{this.state.stageNew ? lang.auth.signup : lang.auth.login}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 10 }} onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                    <Text style={styles.buttonText}>{this.state.stageNew ? lang.auth.switch.registered : lang.auth.switch.not_registered}</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontFamily: commonStyles.fonts.title,
        color: commonStyles.colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: commonStyles.fonts.subtitle,
        color: commonStyles.colors.primary,
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10
    },
    formContainer: {
        backgroundColor: commonStyles.backgrounds.transparent,
        padding: 20,
        borderRadius: 20,
        width: "90%"
    },
    input: {
        marginTop: 10,
        fontFamily: commonStyles.fonts.input,
        fontWeight: "400",
        // height: 40,
        padding: Platform.OS === "ios" ? 15 : 5,
        backgroundColor: commonStyles.backgrounds.primary,
        borderRadius: 7
    },
    button: {
        backgroundColor: commonStyles.colors.accent,
        marginTop: 10,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonText: {
        color: commonStyles.colors.secondary,
        fontFamily: commonStyles.fonts.button,
        fontSize: 20,
        fontWeight: "bold"
    }
});
