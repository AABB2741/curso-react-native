import React from "react";
// import { ScrollView } from "react-navigation";
import { Platform, ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import { Gravatar } from "react-native-gravatar";

import commonStyles from "../commonStyles.json";
import lang from "../../lang/lang";

import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";

export default props => {
    const logout = () => {
        delete axios.defaults.headers.common["Authorization"];
        AsyncStorage.removeItem("userData");
        props.navigation.navigate("AuthOrApp");
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>{lang.appName}</Text>
                <Gravatar style={styles.avatar} options={{email: props.navigation.getParam("email"), secure: true}} />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{props.navigation.getParam("email")}</Text>
                    <Text style={styles.email}>{props.navigation.getParam("name")}</Text>
                </View>
                <TouchableOpacity onPress={logout}>
                    <View style={styles.logoutIcon}>
                        <Icon name="sign-out-alt" size={30} color="#800" />
                        <Text style={styles.logoutText}>{lang.buttons.logout}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerItems {...props} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: commonStyles.colors.border
    },
    title: {
        color: commonStyles.colors.primary,
        fontFamily: commonStyles.fonts.title,
        fontSize: 30,
        paddingTop: Platform.OS === "ios" ? 70 : 30,
        padding: 10
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 15,
        backgroundColor: "#222",
        marginTop: Platform.OS === "ios" ? 30 : 15
    },
    userInfo: {
        marginLeft: 10
    },
    name: {
        fontFamily: commonStyles.fonts.button,
        fontSize: 20,
        marginBottom: 5,
        color: commonStyles.colors.mainText
    },
    email: {
        fontFamily: commonStyles.fonts.desc,
        fontSize: 15,
        marginBottom: 10,
        color: commonStyles.colors.subText
    },
    logoutIcon: {
        marginLeft: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    logoutText: {
        fontFamily: commonStyles.fonts.button,
        color: "#800",
        fontSize: 20,
        marginLeft: 10
    }
});
