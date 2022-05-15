import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";
import { REGISTER_ACCOUNT } from "../services/auth";

const backgroundImg = require("../../assets/fondo.jpg");

const userImage = require("../../assets/usuario.png");

export default function Login({ navigation }) {
  const [user, setUser] = useState(0);
  const [passwd, setPasswd] = useState(0);
  const [newPass, setNewPass] = useState(0);

  const handleRegister = async () => {
    try {
      if (passwd !== newPass) {
        Alert.alert("Las contraseñas no coinciden");
      } else if (user.length < 3) {
        Alert.alert("Debe ingresar un usuario valido");
      } else if (passwd.length < 6) {
        Alert.alert("La contraseñas debe tener mínimo 6 caracteres");
      } else {
        setUser("");
        setPasswd("");
        setNewPass("");
        REGISTER_ACCOUNT(user + "@gmail.com", passwd);
        Alert.alert("Usuario registrado con Exito");
      }
    } catch (error) {
      Alert.alert("Ocurrio algo, por favor intente nuevamente");
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
                Nombre de Usuario
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Ingrese nombre de usuario"
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
                placeholder="Ingrese contraseña"
                onChangeText={(text) => setPasswd(text)}
                secureTextEntry={true}
              ></TextInput>
            </View>
            <View>
              <TextInput
                style={[styles.input, { marginVertical: 4 }]}
                placeholder="Repita contraseña"
                onChangeText={(text) => setNewPass(text)}
                secureTextEntry={true}
              ></TextInput>
            </View>
            <TouchableOpacity
              onPress={handleRegister}
              style={[
                styles.button,
                { backgroundColor: "#1CD2F6", marginVertical: 5 },
              ]}
            >
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                Registrarme
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: "#2166DF",
                  height: 33,
                  marginVertical: 30,
                  width: 200,
                },
              ]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                Iniciar sesión
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
    height: 600,
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
