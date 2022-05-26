import { Alert } from "react-native";
import { ELIMINAR, GUARDAR, IN_ONLINE } from "../services/crud";
import { db } from "../services/sqlite";
import { AcometidaModel } from "../models/Acometida.js";
import { LineaModel } from "../models/Linea.js";
import { PostesModel } from "../models/Postes.js";
import { ReconectadorModel } from "../models/Reconectador.js";
import { SeccionadorModel } from "../models/Seccionador.js";
import { TransformadorModel } from "../models/Transformador";

export const REGISTER_MOVEMENT = async (colecction, datos) => {
  if ((await IN_ONLINE()).isConnected) {
    const res = await GUARDAR(colecction, datos);
    await GUARDAR("movements", {
      id: res.id,
      type: colecction,
      description: datos.description,
    });
    Alert.alert("Registro exitoso");
  } else {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into estructuras (coleccion, value) values (?, ?)",
        [colecction, JSON.stringify(datos)],
        (sqlTxn, res) => {
          Alert.alert(
            "Exito, registro temporal, tus datos se deben sincronizar con internet!"
          );
        },
        (error) => {
          Alert.alert("Algo fallo, intente nuevamente");
        }
      );
    });
  }
};

export const SINCRONIZAR_DATOS = async () => {
  if ((await IN_ONLINE()).isConnected) {
    db.transaction((txn) => {
      txn.executeSql("select * from estructuras", [], async (sqlTxn, res) => {
        for (const item of res.rows._array) {
          const par = await JSON.parse(item.value);
          await REGISTER_MOVEMENT(item.coleccion, par);
          console.log("Se registro de db local");
        }
      });

      txn.executeSql(
        "delete from estructuras where 1=1",
        [],
        async (sqlTxn, res) => Alert.alert("Tus datos estan sincronizados")
      );
    });
  }
};

export const ELIMINAR_REGISTRO = async (datos) => {
  await ELIMINAR(datos.type, datos.id);
  await ELIMINAR("movements", datos.mov_id);
};

export const GET_MODEL = (nombreColeccion) => {
  if (nombreColeccion === "acometidas") {
    return AcometidaModel;
  } else if (nombreColeccion === "lineas") {
    return LineaModel;
  } else if (nombreColeccion === "postes") {
    return PostesModel;
  } else if (nombreColeccion === "reconectadores") {
    return ReconectadorModel;
  } else if (nombreColeccion === "seccionadores") {
    return SeccionadorModel;
  } else if (nombreColeccion === "transformadores") {
    return TransformadorModel;
  }
};
