import React, { Component } from "react";
import { connect } from "react-redux";
import { Gravatar } from "react-native-gravatar";
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from "react-native";

import icon from "../../assets/imgs/icon.png";
import Fonts from "../../common/styles/Fonts";
import Palette from "../../common/styles/Palette/Palette";
import lang from "../../lang/lang";

class Header extends Component {
    render() {
        const name = this.props.name || lang.user.altname;
        const gravatar = this.props.email ? <Gravatar options={{ email: this.props.email, secure: true }} style={styles.avatar}/> : null;

        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>{lang.appName}</Text>
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.user}>{name}</Text>
                    {gravatar}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == "ios" ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: Palette.border,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    rowContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: "contain"
    },
    title: {
        color: Palette.title,
        fontFamily: Fonts.appFont,
        height: 30,
        fontSize: 28
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    user: {
        fontSize: 14,
        color: Palette.text,
        fontFamily: Fonts.button
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 10
    }
});

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

// export default Header;
export default connect(mapStateToProps)(Header);
