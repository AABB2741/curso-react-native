import { useState } from "react";
import {
    View,
    FlatList
} from "react-native";
import { usePosts } from "../../contexts/posts";

import Header from "../../components/Header";
import Post from "../../components/Post";

import styles from "./styles";

import IPost from "../../interfaces/Post";

export default function Feed() {
    const { posts } = usePosts();

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
