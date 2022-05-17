import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  TextInputField,
} from "react-native";
import {} from "react-native-gesture-handler";

export default function ConectorScreen() {
  return (
    <SafeAreaView style={{ padding: 12 }}>
      <ScrollView style={{ paddingTop: 12 }}>
        <TextInput
          placeholder="Ingrese Codigo"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Ingrese Descripción"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Ingrese Dirección"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Ingrese Propiedad"
          style={styles.input}
        ></TextInput>
        <TextInput placeholder="Ingrese Fases" style={styles.input}></TextInput>
        <TextInput
          placeholder="Ingrese Fparent"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Ingrese Tparent"
          style={styles.input}
        ></TextInput>
        <TextInput placeholder="Ingrese AMP" style={styles.input}></TextInput>
        <TextInput placeholder="Ingrese KV" style={styles.input}></TextInput>
        <TextInput placeholder="Ingrese UC" style={styles.input}></TextInput>
        <TextInput
          placeholder="Ingrese Material"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Ingrese SerNumber"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Ingrese DateList"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Ingrese Población"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Ingrese Latitud"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Ingrese Longitud"
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Ingrese Altitud"
          style={styles.input}
        ></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: "500", color: "white" }}>
            Registrar Reconectador
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#00CFEB90",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 8,
    alignSelf: "center",
  },
});
