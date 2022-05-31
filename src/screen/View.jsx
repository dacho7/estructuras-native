import React from "react";

import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { GET_MODEL } from "../generals/functions";

import RegisterElement from "../components/RegisterElement";

export default function Edit({ route, navigation }) {
  const model = GET_MODEL(route.params.type);

  return (
    <SafeAreaView>
      <ScrollView style={{ marginTop: 5 }}>
        <View style={{ paddingTop: 50, alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "400" }}>
            Editar Registro
          </Text>
        </View>
        <RegisterElement
          model={model}
          datosEditar={route.params}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
