//import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { BlurView } from "expo-blur";
import { LOGIN } from "../services/auth";
import { NOTIFICAR_ERROR } from "../generals/notificaciones";

const backgroundImg = require("../../assets/background.jpg");

const userImage = require("../../assets/user.png");

export default function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleSingIn = async () => {
    try {
      const result = JSON.parse(
        JSON.stringify(await LOGIN(user + "@gmail.com", passwd))
      );

      if (result._tokenResponse.idToken) {
        if (result._tokenResponse.email === "admin@gmail.com") {
          navigation.navigate("DashboardAdmin");
          ToastAndroid.show("Ingreso Exitoso", ToastAndroid.SHORT);
          setUser("");
          setPasswd("");
        } else {
          navigation.navigate("Dashboard");
          ToastAndroid.show("Ingreso Exitoso", ToastAndroid.SHORT);
          setUser("");
          setPasswd("");
        }
      }
    } catch (error) {
      await NOTIFICAR_ERROR(error.code);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={backgroundImg}
        style={[styles.image, StyleSheet.absoluteFill]}
      />

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BlurView intensity={200} style={{ borderRadius: 20 }}>
          <View style={styles.login}>
            <Image source={userImage} style={styles.profilePicture} />
            <View>
              <Text
                style={{ fontSize: 17, fontWeight: "400", color: "#676767" }}
              >
                Nombre de usuario
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Digite usuario"
                onChangeText={(text) => setUser(text)}
              ></TextInput>
            </View>
            <View>
              <Text
                style={{ fontSize: 17, fontWeight: "400", color: "#676767" }}
              >
                Contraseña
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Digite contraseña"
                onChangeText={(text) => setPasswd(text)}
                secureTextEntry={true}
              ></TextInput>
            </View>
            <TouchableOpacity
              onPress={handleSingIn}
              style={[
                styles.button,
                { backgroundColor: "#2166DF", height: 40 },
              ]}
            >
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                Ingresar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: "#09D6E7",
                  height: 33,
                  marginVertical: 30,
                  width: 200,
                },
              ]}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                Registrarme
              </Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  login: {
    width: 350,
    height: 550,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  profilePicture: {
    width: 130,
    height: 130,
    borderRadius: 50,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#00CFEB90",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});
