import React from "react";
import { Text, View } from "react-native";

export default function Information({ route }) {
  return (
    <View style={{ margin: 20 }}>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Telefone: {route.params?.telefone}</Text>
      <Text>Endereço: {route.params?.endereco}</Text>
      <Text>N°: {route.params?.numero}</Text>
      <Text>Profissão: {route.params?.profissao}</Text>
    </View>
  );
}
