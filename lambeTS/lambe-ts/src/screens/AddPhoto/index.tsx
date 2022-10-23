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
import { useAuth } from "../../contexts/auth";
import { usePosts } from "../../contexts/posts";
import { useLang } from "../../contexts/lang";
import * as ImagePicker from "expo-image-picker";

import styles from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "../../@types/navigation";

type AddPhotoProps = {
    navigation: NativeStackNavigationProp<RootParamList, "AddPhoto">
}

export default function AddPhoto({ navigation }: AddPhotoProps) {
    const { signed } = useAuth();
    const { lang } = useLang();
    const { handleAddPost } = usePosts();

    const [comment, setComment] = useState("");
    const [image, setImage] = useState<ImageSourcePropType>({});

    function handlePickImage() {
        if (!signed) {
            return Alert.alert(lang.add_photo.err.title, lang.add_photo.err.no_user);
        }

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
        if (!signed) {
            return Alert.alert(lang.add_photo.err.title, lang.add_photo.err.no_user);
        }

        handleAddPost(image, comment);
        setComment("");
        setImage({});
        navigation.navigate("Feed");
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
                        editable={signed}
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
