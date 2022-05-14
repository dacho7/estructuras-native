import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import ConectorScreen from "../components/ConectorScreen.jsx";
import SeccionadoresScreen from "../components/SeccionadoresScreen.jsx";

const Drawer = createDrawerNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Conector" component={ConectorScreen} />
        <Drawer.Screen name="Seccionador" component={SeccionadoresScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
