import React, {useState} from "react";
import { StyleSheet, Text, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { AcometidaModel } from "../models/Acometida";

export default function AcometidaScreen() {

  const [fields, setFields] = useState(AcometidaModel[1])
  const [databaseName, setDatabaseName] = useState(AcometidaModel[0])

  return (
    <SafeAreaView style={{ padding: 12 }}>
      <ScrollView style={{ paddingTop: 12 }}>
        {
          fields.map((e) => 
            <TextInput placeholder={`Ingrese ${e.label}`}
            style={styles.input}></TextInput>
          )
        }
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: "500", color: "white" }}>
            Registrar {databaseName}
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
