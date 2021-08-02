import React from "react";
import { Text, View } from "react-native";

export default function Contacts({ navigation }) {
  return (
    <View>
      <View style={{ margin: 20 }}>
        <Text>Nome: Lucas Santos</Text>
        <Text>Telefone: (77) 77777-7777</Text>
        <Text
          onPress={() =>
            navigation.navigate("Information", {
              nome: "Lucas Santos",
              telefone: "(77) 7777-7777",
              endereco: "Rua 777",
              numero: "777",
              profissao: "Desenvolvedor mobile",
            })
          }
        >
          Information...
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text>Nome: Lucas Gomes</Text>
        <Text>Telefone: (11) 11111-1111</Text>
        <Text
          onPress={() =>
            navigation.navigate("Information", {
              nome: "Lucas Gomes",
              telefone: "(11) 11111-1111",
              endereco: "Rua 111",
              numero: "111",
              profissao: "Desenvolvedor mobile",
            })
          }
        >
          Information...
        </Text>
      </View>
    </View>
  );
}
