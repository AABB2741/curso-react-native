import React from "react";
import { View, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    );
}

const style = StyleSheet.create({
    FlexV4: {
        flexGrow: 1,
        width: 100,
        borderRadius: 16,
        backgroundColor: "#000",
    },
    V0: {
        backgroundColor: "#36c9a7",
        height: 300,
    },
    V1: {
        backgroundColor: "#ff801a",
        flexGrow: 3,
    },
    V2: {
        backgroundColor: "#dd22c1",
        flexGrow: 1,
    }
});

/*  O flex-grow é calculado da seguinte maneira:
 *
 *  -> É somado todas os elementos com o flex grow, no caso acima, o resultado será 4
 *  -> E com base nesse resultado, a área que ainda não está sendo ocupada será dividida nessa quantidade (4 nesse caso)
 *  -> Então, o elemento ocupa a sua área de acordo com o seu valor de flex-grow. Nesse caso, V1 irá ocupar 3/4 do espaço e V2 irá ocupar 1/4 do espaço
 * 
*/
