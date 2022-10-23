import { useState } from "react";
import {
    View,
    FlatList
} from "react-native";

import Header from "../../components/Header";
import Post from "../../components/Post";

import styles from "./styles";

import IPost from "../../interfaces/Post";

export default function Feed() {
    const [posts, setPosts] = useState<IPost[]>([{
        id: Math.random(),
        nickname: "Rafael Pereira Filho",
        email: "rafael@gmail.com",
        image: require("../../../assets/imgs/fence.jpg"),
        comments: [{
            nickname: "John Ray Sheldon",
            comment: "Stunning"
        }, {
            nickname: "Ana Julia Arruda",
            comment: "Foto linda! Onde foi tirada?"
        }]
    }, {
        id: Math.random(),
        nickname: "Francisco Leandro Lima",
        email: "fllima@gmail.com",
        image: require("../../../assets/imgs/bw.jpg"),
        comments: []
    }])

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={posts}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => (
                    <Post key={item.id} { ...item } />
                )}
            />
        </View>
    );
}
