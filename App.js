//import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/components/Login.jsx";
import Register from "./src/components/Register.jsx";
import Dashboard from "./src/screen/Dashboard.jsx";

//ignore warn from firebase auth
LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
