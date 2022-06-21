import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert,
    PermissionsAndroid
} from "react-native";
import * as ImagePicker from "react-native-image-picker";
import button from "../../common/styles/button";
import Fonts from "../../common/styles/Fonts";
import input from "../../common/styles/input";
import Palette from "../../common/styles/Palette/Palette";
import lang from "../../lang/lang";

class AddPhoto extends Component {
    state = {
        image: null,
        comment: ""
    }

    options = {
        mediaType: 'photo',
        maxWidth: 800,
        maxHeight: 600,
        includeBase64: true
    };

    state = {
        uri: null,
        base64: null,
        comment: '',
    }

    requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: lang.permissions.camera.title,
                        message: lang.permissions.camera.description,
                    },
                );

                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: lang.permissions.external_storage.title,
                        message: lang.permissions.external_storage.description,
                    },
                );

                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };

    captureImage = async () => {
        let isCameraPermitted = await this.requestCameraPermission();
        let isStoragePermitted = await this.requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            ImagePicker.launchCamera(this.options, (response) => {
                if (!response.didCancel) {
                    Alert.alert("Jorge henrique vascaino");
                    console.log(response)
                    this.setState({ uri: response.assets[0].uri, base64: response.assets[0].base64 })
                }
            });
        }
    };

    pickImage = () => {
        ImagePicker.launchImageLibrary(this.options, response => {
            if (!response.didCancel) {
                this.setState({ uri: response.assets[0].uri, base64: response.assets[0].base64 });
            }
        });
    };

    save = async () => {
        Alert.alert("Imagem adicionada!", this.state.comment);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>{lang.addPhoto.title}</Text>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: this.state.uri}} style={styles.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                        <Text style={styles.buttonText}>{lang.addPhoto.choosePhoto}</Text>
                    </TouchableOpacity>
                    <TextInput
                        placeholder={lang.addPhoto.comment}
                        style={styles.input}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                    />
                    <TouchableOpacity onPress={this.save} style={{...styles.button, ...button.large}}>
                        <Text style={styles.buttonText}>{lang.addPhoto.publish}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Palette.background
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS == "ios" ? 30 : 20,
        marginBottom: 15,
        fontFamily: Fonts.title,
        color: Palette.text
    },
    imageContainer: {
        width: "90%",
        height: Dimensions.get("window").width / 2,
        backgroundColor: Palette.background2,
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "center"
    },
    button: {
        ...button.default,
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

export default AddPhoto;