import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import Estilo from "./estilo";

export default props => {
    let [nome, setNome] = useState("Teste");
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
                placeholder="Digite seu nome aqui"
                value={null}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    );
}
