import React from "react";
import Screen from "./Screen";

export const ConectorScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Profile"></Screen>
);

export const SeccionadoresScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Seccionadores"></Screen>
);

export const TransformadoresScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Transformadores"></Screen>
);

export const PostesScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Postes"></Screen>
);

export const LineasScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Lineas"></Screen>
);

export const RegistrosScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Registros"></Screen>
);

export const CerrarSesionScreen = ({ navigation }) => (
  <Screen navigation={navigation} name="Cierre Sesion"></Screen>
);
