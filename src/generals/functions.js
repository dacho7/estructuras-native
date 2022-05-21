import { GUARDAR } from "../services/crud";

export const REGISTER_MOVEMENT = async (colecction, datos) => {
  const res = await GUARDAR(colecction, datos);
  await GUARDAR("movements", {
    id: res.id,
    type: colecction,
    description: datos.description,
  });
};
