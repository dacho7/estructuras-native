import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import ConectorScreen from "../components/ConectorScreen.jsx";
import SeccionadoresScreen from "../components/SeccionadoresScreen.jsx";

const Drawer = createDrawerNavigator();

export default function Dashboard() {
  return (
    <Drawer.Navigator initialRouteName="Conector">
      <Drawer.Screen name="Conector" component={ConectorScreen} />
      <Drawer.Screen name="Seccionador" component={SeccionadoresScreen} />
    </Drawer.Navigator>
  );
}
