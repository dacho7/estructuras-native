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
  startAt,
  where,
} from "firebase/firestore";
import { FIRESTORE } from "./config";

export const LISTAR = async (colection) => {
  const coleccion = collection(FIRESTORE, colection);
  const consulta = query(coleccion, orderBy("created_at", "desc"));
  return await getDocs(consulta);
};

export const GUARDAR = async (colection, datos) =>
  addDoc(collection(FIRESTORE, colection), datos);

export const BUSCAR = async (colection, id) =>
  await getDoc(doc(FIRESTORE, colection, id));

export const ELIMINAR = async (colection, objeto) =>
  await deleteDoc(doc(FIRESTORE, colection, objeto.id));

export const EDITAR = async (colection, id, datos) =>
  await setDoc(doc(FIRESTORE, colection, id), datos);
