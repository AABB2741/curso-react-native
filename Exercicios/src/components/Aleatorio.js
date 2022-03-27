import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";

export default ({ min, max }) => {
    //            ^    ^   -> Estão fazendo a leitura do objeto e criando uma variável conforme seu nome: max = prop.max, min = prop.min
    // Essas propriedades passadas como parâmetro são somente para leitura, ou seja, elas não são modificáveis a menos que sejam passadas para outra variável <~ Object.freeze()
    // const { min, max } = props;
    const delta = max - min + 1;
    const aleatorio = Math.round(Math.random() * delta) + min;

    // const delta = props.max - props.min + 1
    // const aleatorio = Math.round(Math.random() * delta) + props.min;
    return (
        <Text style={Estilo.txtG}>
            O valor aleatório é {aleatorio}
        </Text>
    );
}
