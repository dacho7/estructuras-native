import { ELIMINAR, GUARDAR } from "../services/crud";

export const REGISTER_MOVEMENT = async (colecction, datos) => {
  const res = await GUARDAR(colecction, datos);
  await GUARDAR("movements", {
    id: res.id,
    type: colecction,
    description: datos.description,
  });
};

export const ELIMINAR_REGISTRO = async (datos) => {
  await ELIMINAR(datos.type, datos.id);
  await ELIMINAR("movements", datos.mov_id);
};
