import React, { useState, useEffect } from "react";
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

import DateTimePicker from "@react-native-community/datetimepicker";

import { EDITAR_REGISTRO, REGISTER_MOVEMENT } from "../generals/functions";
import { BUSCAR } from "../services/crud";

export default function RegisterElement(props) {
  const databaseDates = props.model[0];
  const fields = props.model[1];
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({});
  const [id, setId] = useState({});
  const [idMov, setMov] = useState("");
  const [allValues, setAllValues] = useState({});

  useEffect(() => {
    if (props.datosEditar) {
      setMov(props.datosEditar.mov_id);
      setId(props.datosEditar.id);
      getDatesFromExist(props.datosEditar.type, props.datosEditar.id);
    } else {
      cleanValues();
    }
  }, []);

  const cleanValues = () => {
    const vals = {};
    fields.forEach((val) => {
      if (val.type === "date") {
        vals[val.name] = new Date();
      } else {
        vals[val.name] = "";
      }
    });
    setValues(vals);
  };

  const onChange = (value, prop) => {
    setShow(false);
    const newValues = values;
    newValues[prop] = new Date(value);
    setValues(newValues);
  };

  const getDatesFromExist = async (colection, id) => {
    const dates = await BUSCAR(colection, id);
    setAllValues(dates);
    const vals = {};
    fields.forEach((val) => {
      console.log(val.name);
      if (val.type === "date") {
        const time =
          dates[val.name].seconds * 1000 +
          dates[val.name].nanoseconds / 1000000;
        vals[val.name] = new Date(time);
      } else {
        vals[val.name] = dates[val.name];
      }
    });
    setValues(vals);
  };

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
      cleanValues();
    }
  };

  const actualizarDatos = async () => {
    await EDITAR_REGISTRO(
      databaseDates.databaseName,
      values,
      id,
      idMov,
      allValues
    );
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
              ></TextInput>
            );
          } else if (e.type === "date") {
            return (
              <View key={index}>
                <View>
                  <TouchableOpacity
                    style={styles.dateTimePicker}
                    onPress={() => setShow(true)}
                  >
                    <Text style={{ fontWeight: "500", color: "#B3B3B3" }}>
                      {typeof values[e.name] === "object"
                        ? `${e.label}: ${values[e.name].toLocaleString(
                            "es-CO",
                            {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            }
                          )}`
                        : e.label}
                    </Text>
                  </TouchableOpacity>
                </View>
                {show && (
                  <DateTimePicker
                    display={"default"}
                    testID="dateTimePicker"
                    value={values[e.name]}
                    mode="date"
                    is24Hour={true}
                    onChange={(text, date) => onChange(date, e.name, text)}
                  />
                )}
              </View>
            );
          }
        })}
        {props.datosEditar ? (
          <TouchableOpacity style={styles.button} onPress={actualizarDatos}>
            <Text style={{ fontWeight: "500", color: "white" }}>
              {databaseDates.updateLabel}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={registrarDatos}>
            <Text style={{ fontWeight: "500", color: "white" }}>
              {databaseDates.registerLabel}
            </Text>
          </TouchableOpacity>
        )}
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
    width: "85%",
    height: 50,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    alignSelf: "center",
  },
  containerStyle: {
    width: "85%",
    height: 50,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 8,
    alignSelf: "center",
  },
  dateTimePicker: {
    width: "85%",
    height: 55,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignSelf: "center",
    backgroundColor: "#fff",
  },
});

// ${values.date_inst.toLocaleString(
//   "es-ES",
//   {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   }
// )}
