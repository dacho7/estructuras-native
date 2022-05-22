import React, { useState } from "react";
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
import DateField from "react-native-datefield";

import { REGISTER_MOVEMENT } from "../generals/functions";

export default function RegisterElement(props) {
  const databaseDates = props.model[0];
  const fields = props.model[1];
  const [values, setValues] = useState({});

  const changeValue = (valor, name) => {
    setValues({ ...values, [name]: valor });
  };

  const validarCampos = () => {
    let valid = true;
    Object.values(fields).forEach((val) => {
      if (
        values[val.name] === undefined ||
        values[val.name] === null ||
        values[val.name] === ""
      ) {
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
      await REGISTER_MOVEMENT(databaseDates.databaseName, values);
      setValues({});
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
                value={values[e.name]}
                onChangeText={(text) => changeValue(text, e.name)}
                keyboardType={e.format}
                autoComplete={e.date}
              ></TextInput>
            );
          } else if (e.type === "list") {
            return (
              <RNPickerSelect
                style={styles.input}
                key={index}
                onValueChange={(text) => changeValue(text, e.name)}
                items={e.values}
                value={values[e.name]}
              />
            );
          } else if (e.type === "date") {
            return (
              <DateField
                labelDate="Día"
                labelMonth="Mes"
                labelYear="Año"
                key={index}
                value={values[e.name]}
                containerStyle={styles.containerStyle}
                onSubmit={(text) => changeValue(text, e.name)}
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
