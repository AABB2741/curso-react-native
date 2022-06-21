import * as Action from "./actionTypes";

export function login(user) {
    return {
        type: Action.USER_LOGGED_IN,
        payload: user
    }
}

export function logout() {
    return {
        type: Action.USER_LOGGED_OUT
    }
}
