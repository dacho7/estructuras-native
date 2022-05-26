import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import RegisterElement from "../components/RegisterElement.jsx";
import RegistrosScreen from "../components/RegistrosScreen.jsx";

import { IS_USER_AUTH, LOGOUT } from "../services/auth.js";

import { ReconectadorModel } from "../models/Reconectador.js";
import { AcometidaModel } from "../models/Acometida";
import { LineaModel } from "../models/Linea.js";
import { SeccionadorModel } from "../models/Seccionador.js";
import { TransformadorModel } from "../models/Transformador.js";
import { PostesModel } from "../models/Postes.js";

const Drawer = createDrawerNavigator();

export default function Dashboard({ navigation }) {
  const backgroundImg = require("../../assets/login-background.png");
  const userImage = require("../../assets/user.png");

  const [user, setUser] = useState("");

  const logout = async () => {
    await LOGOUT();
    navigation.navigate("Login");
  };

  useState(() => {
    IS_USER_AUTH(navigation, setUser).then(() => console.log("log_ing"));
  });

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <SafeAreaView style={{ flex: 1 }}>
          <ImageBackground
            style={{ width: undefined, padding: 16, paddingTop: 45 }}
            source={backgroundImg}
          >
            <Image style={styles.sideMenuProfileIcon} source={userImage} />
            <Text style={styles.name}>{user}</Text>
          </ImageBackground>
          <DrawerContentScrollView style={{ flex: 1 }} {...props}>
            <DrawerItemList {...props} />
            <View
              style={{
                margin: 20,
                marginVertical: 50,
                bottom: 2,
              }}
            >
              <DrawerItem
                label="Cerrar sesión"
                style={{
                  flex: 1,
                  borderRadius: 20,
                  backgroundColor: "#c1eff0",
                  color: "white",
                }}
                onPress={logout}
              />
            </View>
          </DrawerContentScrollView>
        </SafeAreaView>
      )}
      initialRouteName="Reconectador"
    >
      <Drawer.Screen name="Reconectador">
        {(props) => <RegisterElement {...props} model={ReconectadorModel} />}
      </Drawer.Screen>
      <Drawer.Screen name="Seccionador">
        {(props) => <RegisterElement {...props} model={SeccionadorModel} />}
      </Drawer.Screen>
      <Drawer.Screen name="Transformador">
        {(props) => <RegisterElement {...props} model={TransformadorModel} />}
      </Drawer.Screen>
      <Drawer.Screen name="Poste">
        {(props) => <RegisterElement {...props} model={PostesModel} />}
      </Drawer.Screen>
      <Drawer.Screen name="Linea">
        {(props) => <RegisterElement {...props} model={LineaModel} />}
      </Drawer.Screen>
      <Drawer.Screen name="Acometida">
        {(props) => <RegisterElement {...props} model={AcometidaModel} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="Mis Registros"
        component={RegistrosScreen}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: {
    color: "#676767",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "800",
    marginVertical: 8,
  },
});
