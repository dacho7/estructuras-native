//import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screen/Login.jsx";
import Register from "./src/screen/Register.jsx";
import Dashboard from "./src/screen/Dashboard.jsx";
import DashboardAdmin from "./src/screen/DashboardAdmin.jsx";

import { db } from "./src/services/sqlite";

//ignore warn from firebase auth
LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
  "Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.",
]);

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists estructuras (coleccion text, value text);"
      );
    });
    // db.transaction((txn) => {
    //   txn.executeSql("select * from estructuras", [], (sqlTxn, res) => {
    //     res.rows._array.forEach((val) => {
    //       const par = JSON.parse(val.value);
    //       console.log(par);
    //     });
    //   });
    // });
  }, []);

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
