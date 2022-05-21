import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";

import RNPickerSelect from "react-native-picker-select";

import { AcometidaModel } from "../models/Acometida";

export default function AcometidaScreen() {
  const databaseDates = AcometidaModel[0];
  const fields = AcometidaModel[1];
  const values = {};

  fields.forEach((val) => {
    values[val.name] = "";
  });

  const cambiarValor = (valor, name) => {
    values[name] = valor;
  };

  const validarCampos = () => {
    let valid = true;
    Object.values(values).forEach((val) => {
      if (val === "") {
        valid = false;
      }
    });
    return valid;
  };

  const registrarDatos = () => {
    if (!validarCampos()) {
      Alert.alert("Por favor ingresar todos los datos");
    } else {
      Alert.alert("Exito");
    }
  };

  return (
    <SafeAreaView style={{ padding: 12 }}>
      <ScrollView style={{ marginTop: 12 }}>
        {fields.map((e, index) => {
          if (e.type === "string" || e.type === "real") {
            return (
              <TextInput
                key={index}
                placeholder={`Ingrese ${e.label}`}
                style={styles.input}
                value={values.name}
                onChangeText={(text) => cambiarValor(text, e.name)}
              ></TextInput>
            );
          }
          if (e.type === "list") {
            return (
              <RNPickerSelect
                style={styles.input}
                key={index}
                onValueChange={(value) => console.log(e)}
                items={e.values}
              ></RNPickerSelect>
            );
          }
        })}
        <TouchableOpacity style={styles.button}>
          <Text
            style={{ fontWeight: "500", color: "white" }}
            onPress={registrarDatos}
          >
            {databaseDates.registerLabel}
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
