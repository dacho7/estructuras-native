import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  View,
} from "react-native";

import RNPickerSelect from "react-native-picker-select";
import DateField from "react-native-datefield";

import { REGISTER_MOVEMENT } from "../generals/functions";

import { AcometidaModel } from "../models/Acometida";

export default function AcometidaScreen() {
  const databaseDates = AcometidaModel[0];
  const fields = AcometidaModel[1];
  let values = {};

  fields.forEach((val) => {
    values[val.name] = "";
  });

  const cambiarValor = (valor, name) => {
    values[name] = valor;
  };

  const validarCampos = () => {
    values["fecha_levantamiento"] = new Date();
    let valid = true;
    Object.values(values).forEach((val) => {
      if (val === "") {
        valid = false;
      }
    });
    return valid;
  };

  const registrarDatos = async () => {
    if (!validarCampos()) {
      Alert.alert("Por favor ingresar todos los datos");
    } else {
      values.description = `${databaseDates.databaseName}-${values.codigo}`;
      console.log(values.codigo);
      await REGISTER_MOVEMENT(databaseDates.databaseName, values);
      values = {};
      Alert.alert("Exito al registrar");
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
                keyboardType={e.format}
                autoComplete={e.date}
              ></TextInput>
            );
          } else if (e.type === "list") {
            return (
              <RNPickerSelect
                style={styles.input}
                key={index}
                onValueChange={(value) => cambiarValor(value, e.name)}
                items={e.values}
              />
            );
          } else if (e.type === "date") {
            return (
              <DateField
                labelDate="Día"
                labelMonth="Mes"
                labelYear="Año"
                key={index}
                containerStyle={styles.containerStyle}
                onSubmit={(value) => cambiarValor(value, e.name)}
              />
            );
          }
        })}
        <TouchableOpacity style={styles.button} onPress={registrarDatos}>
          <Text style={{ fontWeight: "500", color: "white" }}>
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
  containerStyle: {
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
