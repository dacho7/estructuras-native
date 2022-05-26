import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { Alert } from "react-native";
import NetInfo from "@react-native-community/netinfo";

import { FIRESTORE } from "./config";
import { AUTH } from "./config";

export const LISTAR = async (colection) => {
  const coleccion = collection(FIRESTORE, colection);
  if (AUTH.currentUser.email === "admin@gmail.com") {
    const consulta = query(coleccion, orderBy("created_at", "desc"));
    const datosConsulta = await getDocs(consulta);
    let datos = [];
    datosConsulta.forEach((val) => {
      datos.push({ ...val.data(), mov_id: val.id });
    });
    return datos;
  } else {
    const usuarioId = AUTH?.currentUser.uid;
    const consulta = query(coleccion, where("uid", "==", usuarioId));
    const datosConsulta = await getDocs(consulta);
    let datos = [];
    datosConsulta.forEach((val) => {
      datos.push({ ...val.data(), mov_id: val.id });
    });
    return datos.sort((a, b) => a.created_at > b.created_at);
  }
};

export const GUARDAR = async (colection, datos) => {
  const netStatus = await NetInfo.fetch();
  if (netStatus.isConnected) {
    const usuarioId = AUTH?.currentUser.uid;
    if (usuarioId) {
      datos.created_at = new Date();
      datos.updated_at = new Date();
      datos.uid = usuarioId;
      return await addDoc(collection(FIRESTORE, colection), datos);
    }
  } else {
    Alert.alert("Internet not connected.!!!");
  }
};

export const BUSCAR = async (colection, id) =>
  await getDoc(doc(FIRESTORE, colection, id));

export const ELIMINAR = async (colection, id) =>
  await deleteDoc(doc(FIRESTORE, colection, id));

export const EDITAR = async (colection, id, datos) => {
  datos.updated_at = new Date();
  return await setDoc(doc(FIRESTORE, colection, id), datos);
};
