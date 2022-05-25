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
import { FIRESTORE } from "./config";
import { AUTH } from "./config";

export const LISTAR = async (colection) => {
  const coleccion = collection(FIRESTORE, colection);
  const usuarioId = AUTH?.currentUser.uid;
  const consulta = query(coleccion, where("uid", "==", usuarioId));
  const datosConsulta = await getDocs(consulta);
  let datos = [];
  datosConsulta.forEach((val) => {
    datos.push({ ...val.data(), mov_id: val.id });
  });
  return datos.sort((a, b) => a.created_at > b.created_at);
};

export const GUARDAR = async (colection, datos) => {
  const usuarioId = AUTH?.currentUser.uid;
  if (usuarioId) {
    datos.created_at = new Date();
    datos.updated_at = new Date();
    datos.uid = usuarioId;
    return await addDoc(collection(FIRESTORE, colection), datos);
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
