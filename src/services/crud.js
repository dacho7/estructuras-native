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
} from "firebase/firestore";
import { FIRESTORE } from "./config";

export const LISTAR = async (colection) => {
  const coleccion = collection(FIRESTORE, colection);
  const consulta = query(coleccion, orderBy("created_at", "desc"));
  return await getDocs(consulta);
};

export const GUARDAR = async (colection, datos) => {
  datos.created_at = new Date();
  datos.updated_at = new Date();
  return await addDoc(collection(FIRESTORE, colection), datos);
};

export const BUSCAR = async (colection, id) =>
  await getDoc(doc(FIRESTORE, colection, id));

export const ELIMINAR = async (colection, objeto) =>
  await deleteDoc(doc(FIRESTORE, colection, objeto.id));

export const EDITAR = async (colection, id, datos) => {
  datos.updated_at = new Date();
  return await setDoc(doc(FIRESTORE, colection, id), datos);
};
