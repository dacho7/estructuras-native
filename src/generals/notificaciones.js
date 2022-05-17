import {Alert} from "react-native";

export const NOTIFICAR_ERROR = async (codigo) => {
  if (codigo === "auth/email-already-in-use") {
   Alert.alert("El correo ya está en uso");
  } else if (codigo === "auth/invalid-email") {
    Alert.alert("Correo invalido");
  } else if (codigo === "auth/wrong-password") {
    Alert.alert("Contraseña incorrecta");
  } else if (codigo === "auth/user-not-found") {
    Alert.alert("Contraseña incorrecta");
  } else if (codigo === "auth/user-disabled") {
    Alert.alert("Contraseña incorrecta");
  } else if (codigo === "auth/admin-restricted-operation") {
    Alert.alert("Operación bloqueada!");
  } else if (codigo === "auth/network-request-failed") {
    Alert.alert("No se pudo conectar al servidor");
  }else if (codigo === "auth/operation-not-allowed") {
    Alert.alert("Operacion no permitida");
  }else if (codigo === "storage/object-not-found") {
    Alert.alert("Imagen no encontrada!");
  }
};
