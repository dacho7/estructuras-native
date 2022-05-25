import { AUTH } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { async } from "@firebase/util";

export const REGISTER_ACCOUNT = async (email, passwd) =>
  await createUserWithEmailAndPassword(AUTH, email, passwd);

export const LOGIN = async (email, passwd) =>
  await signInWithEmailAndPassword(AUTH, email, passwd);

export const LOGOUT = async () => await signOut(AUTH);

export const IS_USER_AUTH = async (navigation, setUser) =>
  onAuthStateChanged(AUTH, (user) => {
    if (user) {
      const email = user.email;
      if (email === "admin@gmail.com") {
        navigation.navigate("DashboardAdmin");
      }
      setUser(email.split("@")[0].replace("_", " "));
    } else {
      navigation.navigate("Login");
    }
  });
