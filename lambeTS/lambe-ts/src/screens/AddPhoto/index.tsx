import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    Alert,
    ImageSourcePropType
} from "react-native";
import { useLang } from "../../contexts/lang";
import * as ImagePicker from "expo-image-picker";

import styles from "./styles";

export default function AddPhoto() {
    const { lang } = useLang();

    const [comment, setComment] = useState("");
    const [image, setImage] = useState<ImageSourcePropType>({});

    function handlePickImage() {
        ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            base64: true
        }).then(res => {
            if (!res.cancelled) {
                setImage({ uri: res.uri });
            }
        })
    }

    async function handleSavePost() {
        Alert.alert("Imagem adicionada!", comment);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>{lang.add_photo.title}</Text>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                    <TouchableOpacity style={styles.button} onPress={handlePickImage}>
                        <Text style={styles.buttonText}>{lang.add_photo.button}</Text>
                    </TouchableOpacity>
                    <TextInput
                        placeholder={lang.add_photo.comment}
                        style={styles.input}
                        value={comment}
                        onChangeText={comment => setComment(comment)}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSavePost}>
                        <Text style={styles.buttonText}>{lang.add_photo.publish}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
