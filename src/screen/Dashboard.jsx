import React from "react";
import { StyleSheet, SafeAreaView, Image, ImageBackground } from "react-native";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import ConectorScreen from "../components/ConectorScreen.jsx";
import SeccionadoresScreen from "../components/SeccionadoresScreen.jsx";

const Drawer = createDrawerNavigator();

const backgroundImg = require("../../assets/login-background.png");
const userImage = require("../../assets/user.png");

export default function Dashboard() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <SafeAreaView style={{ flex: 1 }}>
          <ImageBackground source={backgroundImg}>
            <Image source={userImage} />
          </ImageBackground>
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        </SafeAreaView>
      )}
      initialRouteName="Conector"
    >
      <Drawer.Screen name="Conector" component={ConectorScreen} />
      <Drawer.Screen name="Seccionador" component={SeccionadoresScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
});
