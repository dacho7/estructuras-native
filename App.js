//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Image,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";

const uri =
  "https://i.pinimg.com/474x/38/42/13/384213759bf0b9f87c48e31b0b767691--google-https-language.jpg";
const profilePicture =
  "https://www.coordinadora.com/wp-content/uploads/sidebar_usuario-corporativo.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "purple",
          position: "absolute",
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "purple",
          bottom: 120,
          position: "absolute",
          borderRadius: 50,
          transform: [{ rotate: "45deg" }],
        }}
      ></View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BlurView intensity={200}>
          <View style={styles.login}>
            <Image
              source={{ uri: profilePicture }}
              style={styles.profilePicture}
            />
            <Text style={{ fontSize: 17, fontWeight: "400", color: "black" }}>
              E-mail
            </Text>
            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
            ></TextInput>
            <Text style={{ fontSize: 17, fontWeight: "400", color: "black" }}>
              Password
            </Text>
            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              secureTextEntry={true}
            ></TextInput>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#00CFEB90" }]}
            >
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                Login
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
    height: 500,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  profilePicture: {
    width: "50%",
    height: "36%",
    borderRadius: 50,
    //borderColor: "#fff",
    //borderWidth: 1,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff90",
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
    borderColor: "#fff",
    borderWidth: 1,
  },
});
