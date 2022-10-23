import { ImageSourcePropType } from "react-native";
import IComment from "./Comment";

export default interface IPost {
    id: number;
    nickname: string;
    email: string;
    image: ImageSourcePropType;
    comments: IComment[];
}
