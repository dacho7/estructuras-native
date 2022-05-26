import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { LISTAR, ELIMINAR } from "../services/crud";

import { ELIMINAR_REGISTRO } from "../generals/functions";

const refresh_ico = require("../../assets/refresh-icon.png");

export default function RegistrosScreen() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    getDates();
  }, []);

  const getDates = async () => {
    const res = await LISTAR("movements");
    console.log("res", res);
    //setElements(res);
  };

  const eliminarRegistro = (obj) => {
    Alert.alert(
      "Esta seguro de eliminar este registro?",
      `Registro ${obj.description}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: async () => {
            await ELIMINAR_REGISTRO(obj);
            getDates();
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={getDates}>
        <Image source={refresh_ico} style={styles.refresh} />
      </TouchableOpacity>
      <ScrollView>
        {elements.map((val, index) => {
          return (
            <View style={{ marginTop: 20 }} key={index}>
              <View style={styles.container}>
                <View style={styles.square}>
                  <Text style={styles.font}>{val.type}</Text>
                </View>
                <View style={styles.square}>
                  <Text style={styles.font}>{val.description}</Text>
                </View>
                <View style={styles.square}>
                  <Text style={styles.font}>
                    {new Date(
                      val.created_at.seconds * 1000 +
                        val.created_at.nanoseconds / 1000000
                    ).toLocaleDateString()}
                  </Text>
                </View>
              </View>
              <View style={styles.container}>
                <View style={styles.square2}>
                  <Text style={styles.font}>Editar</Text>
                </View>
                <View style={styles.square2}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => eliminarRegistro(val)}
                  >
                    <Text style={styles.font}>Eliminar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    justifyContent: "center",
    flexDirection: "row",
  },
  square: {
    backgroundColor: "#c1eff0",
    width: "33%",
    height: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  square2: {
    backgroundColor: "#c1eff0",
    width: "50%",
    height: 40,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    fontSize: 17,
    fontWeight: "400",
  },
  refresh: {
    width: 60,
    height: 60,
    margin: 5,
    marginTop: 10,
    alignSelf: "flex-end",
    marginRight: 15,
  },
});
