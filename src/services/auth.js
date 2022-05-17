import { AUTH } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const REGISTER_ACCOUNT = async (email, passwd) =>
  await createUserWithEmailAndPassword(AUTH, email, passwd);

export const LOGIN = async (email, passwd) =>
  await signInWithEmailAndPassword(AUTH, email, passwd);

export const LOGOUT = async () => await signOut(AUTH);

export const GET_NAME = () =>
  AUTH.currentUser.email.split("@")[0].replace("_", " ");
