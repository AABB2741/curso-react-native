import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import UsersContext from "../context/UsersContext";

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params || {});
    const { dispatch } = useContext(UsersContext);

    return (
        <View style={style.form}>
            <Text>Nome de usuário</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o nome de usuário"
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o e-mail"
                value={user.email}
            />
            <Text>URL do avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a URL do avatar"
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? "updateUser" : "createUser",
                        payload: user
                    })
                    navigation.goBack();
                }}
            />
        </View>
    );
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        marginTop: 5,
        minHeight: 40,
        padding: 5,
        borderColor: "gray",
        borderWidth: 0,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 10
    }
});
