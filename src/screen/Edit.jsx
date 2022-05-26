import React from "react";

import { GET_MODEL } from "../generals/functions";

import RegisterElement from "../components/RegisterElement";

export default function Edit({ route }) {
  const model = GET_MODEL(route.params.type);

  return <RegisterElement model={model} datosEditar={route.params} />;
}
