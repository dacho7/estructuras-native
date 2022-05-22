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

export const IS_USER_AUTH = async (navigation, setUser) =>
  onAuthStateChanged(AUTH, (user) => {
    if (user) {
      const email = user.email;
      setUser(email.split("@")[0].replace("_", " "));
    } else {
      navigation.navigate("Login");
    }
  });
