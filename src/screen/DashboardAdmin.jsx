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

import RegistrosScreen from "../components/RegistrosScreen.jsx";

import { IS_USER_AUTH, LOGOUT } from "../services/auth.js";

const Drawer = createDrawerNavigator();

export default function DashboardAdmin({ navigation }) {
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
      initialRouteName="Registros"
    >
      <Drawer.Screen
        name="Registros"
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
