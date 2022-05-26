import { Alert } from "react-native";
import { ELIMINAR, GUARDAR, IN_ONLINE } from "../services/crud";
import { db } from "../services/sqlite";

export const REGISTER_MOVEMENT = async (colecction, datos, forceUpdate) => {
  if (!(await IN_ONLINE()).isConnected) {
    const res = await GUARDAR(colecction, datos);
    await GUARDAR("movements", {
      id: res.id,
      type: colecction,
      description: datos.description,
    });
  } else {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "insert into estructuras (coleccion, value) values (?, ?)",
          [colecction, JSON.stringify(datos)],
          (sqlTxn, res) => {
            console.log("Se registro");
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
      },
      null,
      forceUpdate
    );
  }
};

export const ELIMINAR_REGISTRO = async (datos) => {
  await ELIMINAR(datos.type, datos.id);
  await ELIMINAR("movements", datos.mov_id);
};
