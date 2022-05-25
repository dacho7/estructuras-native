export const LineaModel = [
  {
    databaseName: "lineas",
    registerLabel: "Registrar Linea",
    updateLabel: "Actualizar Linea",
  },
  [
    { name: "codigo", label: "Código", type: "string", format: "numeric" },
    {
      name: "descripcion",
      label: "Descripción",
      type: "string",
      format: "string",
    },
    {
      name: "direccion",
      label: "Dirección",
      type: "string",
      format: "string",
    },
    {
      name: "usuario",
      label: "Usuario",
      type: "string",
      format: "string",
    },
    {
      name: "simbolo",
      label: "Símbolo",
      type: "int",
      format: "numeric",
    },
    {
      name: "fases",
      label: "Fases",
      type: "int",
      format: "numeric",
    },
    {
      name: "tparent",
      label: "TParent",
      type: "string",
    },
    {
      name: "fparent",
      label: "FParent",
      type: "string",
    },
    {
      name: "conductor",
      label: "Conductor",
      type: "string",
    },
    {
      name: "neutro",
      label: "Neutro",
      type: "string",
    },
    {
      name: "longitud1",
      label: "Longitud 1",
      type: "real",
      format: "decimal-pad",
    },
    {
      name: "latitud1",
      label: "Latitud 1",
      type: "real",
      format: "decimal-pad",
    },
    {
      name: "longitud2",
      label: "Longitud 2",
      type: "real",
      format: "decimal-pad",
    },
    {
      name: "latitud2",
      label: "Latitud 2",
      type: "real",
      format: "decimal-pad",
    },
    {
      name: "estado",
      label: "Estado",
      type: "real",
      format: "decimal-pad",
    },
    {
      name: "propietario",
      label: "Propietario",
      type: "real",
      format: "decimal-pad",
    },
    {
      name: "poblacion",
      label: "Población",
      type: "real",
      format: "decimal-pad",
    },
    {
      name: "date_instalacion",
      label: "Fecha de Instalación",
      type: "date",
      format: "birthdate-full",
    },
  ],
];
