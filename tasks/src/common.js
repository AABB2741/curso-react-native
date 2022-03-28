import { Alert, Platform } from "react-native";

import lang from "../lang/lang";

const server = Platform.OS === "ios" ?
    "http://localhost:3000" : "http://10.0.2.2:3000";

function showError(err) {
    Alert.alert("Erro!", `Mensagem: ${err}`);
}

function showRequestError(errCode, details) {
    let msg = lang.error[errCode.toString()];
    msg += `\n\n\n${lang.error.code}: ${errCode}`;
    msg = details ? msg + `\n\n${lang.error.details}: ${details}` : msg;

    Alert.alert(lang.error.title, msg);
}

function showSuccess(msg) {
    Alert.alert(lang.success.title, msg);
}

export { server, showError, showSuccess, showRequestError }
