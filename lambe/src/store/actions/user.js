import * as Action from "./actionTypes";

export const login = user => {
    return {
        type: Action.USER_LOGGED_IN,
        payload: user
    };
}

export const logout = () => {
    return {
        type: Action.USER_LOGGED_OUT
    };
}
