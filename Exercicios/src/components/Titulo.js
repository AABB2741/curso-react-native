import React from "react";
import { View, Text } from "react-native";
import Estilo from "./estilo";

export default props => (
    // Semelhante a <React.Fragment> ou, se importar o Fragment, <Fragment></Fragment>
    <>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>
);
