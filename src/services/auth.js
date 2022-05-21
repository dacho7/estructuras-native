import { AUTH } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const REGISTER_ACCOUNT = async (email, passwd) =>
  await createUserWithEmailAndPassword(AUTH, email, passwd);

export const LOGIN = async (email, passwd) =>
  await signInWithEmailAndPassword(AUTH, email, passwd);

export const LOGOUT = async () => await signOut(AUTH);

export const GET_NAME = async () => await AUTH.currentUser.email.split("@")[0];

export const IS_USER_AUTH = async (navigation) =>
  onAuthStateChanged(AUTH, (user) => {
    if (user) {
      const uid = user.uid;
      return uid;
    } else {
      navigation.navigate("Login");
    }
  });
