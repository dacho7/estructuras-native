import { Alert } from "react-native";
import { ELIMINAR, GUARDAR, IN_ONLINE } from "../services/crud";
import { db } from "../services/sqlite";

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
      // tx.executeSql("select * from estructuras", [], (sqlTxn, res) => {
      //   console.log(res.rows);
      // });
    });
  }
};

export const SINCRONIZAR_DATOS = async () => {
  if ((await IN_ONLINE()).isConnected) {
    console.log("------");
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
