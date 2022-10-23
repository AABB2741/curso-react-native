import { useState, useEffect, createContext, useContext } from "react";
import {
    ImageSourcePropType
} from "react-native";
import IPost from "../interfaces/Post";
import { useAuth } from "./auth";

interface PostsContextProps {
    children: React.ReactNode
}

interface PostsContextData {
    posts: IPost[];
    handleAddPost: (image: ImageSourcePropType, comment: string) => Promise<void>;
    handleAddComment: (id: number, comment: string) => Promise<void>;
}

const PostsContext = createContext<PostsContextData>({} as PostsContextData);

const initialState = [{
    id: Math.random(),
    nickname: "Rafael Pereira Filho",
    email: "rafael@gmail.com",
    image: require("../../assets/imgs/fence.jpg"),
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
    image: require("../../assets/imgs/bw.jpg"),
    comments: []
}];

export default function PostsProvider({ children }: PostsContextProps) {
    const { user, signed } = useAuth();
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        setPosts(initialState);
    }, []);

    async function handleAddComment(id: number, comment: string) {
        let newPosts = [...posts];
        for (let post of newPosts) {
            if (post.id === id) {
                post.comments.push({
                    nickname: user?.name || "",
                    comment
                });
            }
        }
        setPosts(newPosts);
    }

    async function handleAddPost(image: ImageSourcePropType, comment: string) {
        if (!signed)
            return;

        let newPosts = [...posts];
        newPosts.push({
            id: Math.random(),
            nickname: user?.name || "",
            email: user?.email || "",
            image,
            comments: [{
                nickname: user?.name || "",
                comment
            }]
        });
        setPosts(newPosts);
    }

    return (
        <PostsContext.Provider value={{ posts, handleAddPost, handleAddComment }}>
            {children}
        </PostsContext.Provider>
    )
}

export const usePosts = () => useContext(PostsContext);
