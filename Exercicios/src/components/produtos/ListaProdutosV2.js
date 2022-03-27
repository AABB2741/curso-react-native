import React from "react";
import { Text, FlatList } from "react-native";
import Estilo from "../estilo";

import produtos from "./produtos";

export default props => {
    const produtoRender = ({item: p}) => {
        return <Text>[{p.id}] {p.nome} - R${p.preco.toString().replace(".", ",")}</Text>
    }
    return (
        <>
            <Text style={Estilo.txtG}>Lista de produtos V2</Text>
            <FlatList
                data={produtos}
                keyExtractor={i => i.id.toString()}
                renderItem={produtoRender}
            />
        </>
    );
}
