import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import Field from "./src/components/Field";

export default () => {
  return (
      <SafeAreaView style={styles.body}>
        <View>
          <Field texto="Qual é o seu nome?" placeholder="Insira o seu nome aqui" />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    // backgroundColor: '#000',
    flexGrow: 1
  },
  
});
