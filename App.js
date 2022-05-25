//import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { LogBox } from "react-native";

import { NOTIFICAR_ERROR } from "./src/generals/notificaciones.js";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screen/Login.jsx";
import Register from "./src/screen/Register.jsx";
import Dashboard from "./src/screen/Dashboard.jsx";
import DashboardAdmin from "./src/screen/DashboardAdmin.jsx";

//ignore warn from firebase auth
LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
  "Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.",
]);

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    handleSingIn();
  }, []);

  const handleSingIn = async () => {
    try {
      const result = JSON.parse(
        JSON.stringify(await LOGIN(user + "@gmail.com", passwd))
      );

      if (result._tokenResponse.idToken) {
        if (result._tokenResponse.email === "admin@gmail.com") {
          console.log("soy admin");
          navigation.navigate("DashboardAdmin");
          Alert.alert("Ingreso Exitoso");
          setUser("");
          setPasswd("");
        } else {
          console.log("no soy admin");
          navigation.navigate("Dashboard");
          Alert.alert("Ingreso Exitoso");
          setUser("");
          setPasswd("");
        }
      }
    } catch (error) {
      await NOTIFICAR_ERROR(error.code);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Dashboard"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="DashboardAdmin" component={DashboardAdmin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
