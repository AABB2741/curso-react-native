import * as Action from "./actionTypes";
import axios from "axios";
import { Alert } from "react-native";

export const addPost = post => {
    return dispatch => {
        axios({
            url: "uploadImage",
            baseURL: "https://us-central1-lambe-61a1a.cloudfunctions.net",
            method: "post",
            data: {
                image: post.image.base64
            }
        }).catch(err => Alert.alert("Erro: ", JSON.stringify(err)))
            .then(res => {
                post.image = res.data.imageUrl;
                Alert.alert("Enviado!", JSON.stringify(res));
                axios.post("/posts.json", { ...post })
                    .catch(err => console.log(err))
                    .then(res => console.log(res.data));
            });
    }
    // return {
    //     type: Action.ADD_POST,
    //     payload: post
    // };
}

export const addComment = payload => {
    return {
        type: Action.ADD_COMMENT,
        payload
    }
}
