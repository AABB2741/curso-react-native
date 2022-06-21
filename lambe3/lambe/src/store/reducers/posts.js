import * as Action from "../actions/actionTypes";

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: "Jorge Henrique",
        email: "jorge.henrique@gmail.com",
        image: require("../../../assets/imgs/fence.jpg"),
        comments: [{
            nickname: "John Ray Sheldon",
            comment: "Stunning!"
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
    }]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case Action.ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case Action.ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(
                                action.payload.comment
                            );
                        } else {
                            post.comments = [action.payload.comment]
                        }
                    }
                    return post;
                })
            }
        default:
            return state;
    }
}

export default reducer;
