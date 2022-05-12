import { AUTH } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const CREAR_CUENTA = async (email, passwd) =>
  await createUserWithEmailAndPassword(AUTH, email, passwd);

export const INICIAR_SESION = async (email, passwd) =>
  await signInWithEmailAndPassword(AUTH, email, passwd);
