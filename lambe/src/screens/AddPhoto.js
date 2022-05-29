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
	PermissionsAndroid,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

import lang from "../../lang/lang";

class AddPhoto extends Component {
	options = {
		saveToPhotos: true,
		mediaType: "photo",
		maxWidth: 800,
		maxHeight: 600,
	}

	state = {
		uri: null,
		base64: null,
		comment: "",
	}

	requestCameraPermission = async () => {
		if (Platform.OS === "android") {
			try {
				const granted = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.CAMERA, {
						title: lang.modals.permissions.camera.title,
						message: lang.modals.permissions.camera.message,
					}
				);
				return granted === PermissionsAndroid.RESULTS.GRANTED;
			} catch (e) {
				console.warn(e);
				return false;
			}
		} else return true;
	}

	requestExternalWritePermission = async () => {
		if (Platform.OS === "android") {
			try {
				const granted = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
					{
						title: lang.modals.permissions.storage.title,
						message: lang.modals.permissions.storage.message,
					},
				);
				return granted === PermissionsAndroid.RESULTS.GRANTED;
			} catch (e) {
				console.warn(e);
				alert("Write permission err", e);
			}
			return false
		} else return true
	}

	captureImage = async () => {
		const isCameraPermitted = await this.requestCameraPermission()
		const isStoragePermitted = await this.requestExternalWritePermission()

		if (isCameraPermitted && isStoragePermitted) {
			launchCamera(this.options, (response) => {
				if (!response.didCancel) {
					this.setState({
						uri: response.assets[0].uri,
						base64: response.assets[0].data,
					});
				}
			});
		}
	}

	pickImage = () => {
		launchImageLibrary(this.options, (response) => {
			if (!response.didCancel) {
				this.setState({
					uri: response.assets[0].uri,
					base64: response.assets[0].data,
				});
			}
		})
	}

	selectType = () => {
		Alert.alert(lang.addPhoto.title, lang.addPhoto.desc,
			[
				{
					text: lang.addPhoto.gallery,
					onPress: () => this.pickImage(),
					style: "default",
				},
				{
					text: lang.addPhoto.camera,
					onPress: () => this.captureImage(),
					style: "default",
				},
			],
			{
				cancelable: true,
				onDismiss: () => console.log("Tratar depois...")
			}
		)
	}

	save = async () => {
		Alert.alert("Imagem Adicionada", this.state.comment);
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.title}>{lang.addPhoto.shareAnImage}</Text>
					<View style={styles.imageContainer}>
						<Image source={{ uri: this.state.uri }}
							style={styles.image} />
					</View>
					<TouchableOpacity onPress={this.selectType}
						style={styles.button}>
						<Text style={styles.buttonText}>{lang.addPhoto.buttonText}</Text>
					</TouchableOpacity>
					<TextInput placeholder={lang.addPhoto.addComment}
						style={styles.input} value={this.state.comment}
						onChangeText={comment => this.setState({ comment })} />
					<TouchableOpacity onPress={this.save}
						disabled={this.props.loading}
						style={[styles.button, this.props.loading ? styles.buttonDisabled : null]}>
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
		alignItems: "center"
	},
	title: {
		fontSize: 20,
		marginTop: Platform.OS === "ios" ? 50 : 30,
		fontWeight: "bold"
	},
	imageContainer: {
		width: "90%",
		height: Dimensions.get("window").width / 2,
		backgroundColor: "#EEE",
		marginTop: 10
	},
	image: {
		width: "100%",
		height: Dimensions.get("window").width / 2,
		resizeMode: "center"
	},
	button: {
		marginTop: 30,
		padding: 10,
		backgroundColor: "#1e90ff",
		borderRadius: 12
	},
	buttonText: {
		fontSize: 20,
		color: "#FFF"
	},
	input: {
		marginTop: 20,
		width: "90%",
		fontFamily: "Rubik-Regular"
	},
	buttonDisabled: {
		backgroundColor: "#AAA"
	}
});

export default AddPhoto;