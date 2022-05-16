import React, { useState } from "react";
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

import ConectorScreen from "../components/ConectorScreen.jsx";
import SeccionadoresScreen from "../components/SeccionadoresScreen.jsx";
import TransformadorScree from "../components/TransformadorScree.jsx";
import PosteScreen from "../components/PosteScreen.jsx";
import LineaScreen from "../components/LineaScreen.jsx";
import RegistrosScreen from "../components/RegistrosScreen.jsx";
import AcometidaScreen from "../components/AcometidaScreen.jsx";
import { GET_NAME } from "../services/auth.js";

const Drawer = createDrawerNavigator();

export default function Dashboard() {
  const backgroundImg = require("../../assets/login-background.png");
  const userImage = require("../../assets/user.png");

  const [user, setUser] = useState("");

  const logout = async () => {
    setUser(await GET_NAME());
  };

  const setName = async () => {
    console.log("name");
  };

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
                label="Log out"
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
      initialRouteName="Conector"
    >
      <Drawer.Screen name="Conector" component={ConectorScreen} />
      <Drawer.Screen name="Seccionador" component={SeccionadoresScreen} />
      <Drawer.Screen name="Transformador" component={TransformadorScree} />
      <Drawer.Screen name="Poste" component={PosteScreen} />
      <Drawer.Screen name="Linea" component={LineaScreen} />
      <Drawer.Screen name="Acometida" component={AcometidaScreen} />
      <Drawer.Screen name="Mis Registros" component={RegistrosScreen} />
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
