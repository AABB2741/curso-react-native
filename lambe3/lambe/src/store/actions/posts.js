import * as Action from "./actionTypes";

export const addPost = post => {
    return {
        type: Action.ADD_POST,
        payload: post
    };
}

export const addComment = payload => {
    return {
        type: Action.ADD_COMMENT,
        payload
    }
}
