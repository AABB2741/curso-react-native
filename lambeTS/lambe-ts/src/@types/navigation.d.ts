// export interface GameParams {
//     id: string;
//     title: string;
//     bannerUrl: string;
// }

// export declare global {
//     namespace ReactNavigation {
//         interface RootParamList {
//             // Home: undefined;
//             // Game: GameParams
//             Feed: undefined;
//             AddPhoto: undefined;
//             Profile: undefined;
//         }
//     }
// }

export type RootParamList = {
    Feed: undefined;
    AddPhoto: undefined;
    Profile: undefined;
}

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
}
