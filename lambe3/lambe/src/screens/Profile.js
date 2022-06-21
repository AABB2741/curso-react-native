import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { Gravatar } from "react-native-gravatar";
import Icon from "react-native-vector-icons/FontAwesome5";

import * as Screen from "../Screen";
import button from "../../common/styles/button";
import Fonts from "../../common/styles/Fonts";
import Palette from "../../common/styles/Palette/Palette";
import lang from "../../lang/lang";

class Profile extends Component {
    logout = () => {
        this.props.navigation.navigate(Screen.Login);
    }

    render() {
        const options = {
            email: "teste@teste.com",
            secure: true
        }

        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>Teste</Text>
                <Text style={styles.email}>teste@teste.com</Text>
                <TouchableOpacity onPress={this.logout} style={{...styles.button, ...button.large}}>
                    {/* <Icon name="sign-out-alt" size={30} color={Palette.buttonText }/> */}
                    <Text style={styles.buttonText}>{lang.profile.logout}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontFamily: Fonts.profile.nickname
    },
    email: {
        marginTop: 20,
        fontSize: 25
    },
    button: {
        ...button.default,
        backgroundColor: Palette.error,
        justifyContent: "center",
        marginTop: 30
    },
    buttonText: {
        ...button.text
    }
})

export default Profile;
