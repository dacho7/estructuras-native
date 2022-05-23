export const SeccionadorModel = [
  {
    databaseName: "seccionadores",
    registerLabel: "Registrar Seccionador",
    updateLabel: "Actualizar Seccionador",
  },
  [
    { name: "codigo", label: "Código", type: "string", format: "numeric" },
    {
      name: "descripcion",
      label: "Descripción",
      type: "string",
    },
    {
      name: "direccion",
      label: "Dirección",
      type: "string",
    },
    {
      name: "fases",
      label: "Fases",
      type: "list",
      values: [
        { label: "A", value: "A" },
        { label: "B", value: "B" },
        { label: "C", value: "C" },
      ],
    },
    {
      name: "circuito",
      label: "Circuito",
      type: "list",
      values: [{ label: "Sin Datos", value: "Sin Datos" }],
    },

    {
      name: "kv",
      label: "Voltaje Nominal",
      type: "list",
      values: [{ label: "Sin Datos", value: "Sin Datos" }],
    },
    {
      name: "amp",
      label: "Corriente Nominal",
      type: "list",
      values: [{ label: "Sin Datos", value: "Sin Datos" }],
    },
    {
      name: "tipo",
      label: "Tipo Seccionador",
      type: "int",
    },
    {
      name: "estado",
      label: "Estado",
      type: "list",
      values: [
        { label: "Bueno", value: "Bueno" },
        { label: "Regular", value: "Regular" },
        { label: "Malo", value: "Malo" },
      ],
    },
    {
      name: "date_instalacion",
      label: "Fecha de Instalación",
      type: "date",
      format: "birthdate-full",
    },
    {
      name: "monotipo",
      label: "Monotipo",
      type: "list",
      values: [
        { label: "Trifásico", value: "Trifásico" },
        { label: "Monofásico", value: "Monofásico" },
      ],
    },
    {
      name: "latitud",
      label: "Latitud",
      type: "real",
      format: "decimal-pad",
    },
    {
      name: "longitud",
      label: "Longitu",
      type: "real",
      format: "decimal-pad",
    },
    {
      name: "altitud",
      label: "Altitud",
      type: "real",
      format: "decimal-pad",
    },
  ],
];

//CODIGO	VARCHAR (32)	S+MUNICIPIO+CONSECUTIVO
//FASES	NUMBER (2,0)	A,B,C BOTON
//AMP	NUMBER (6,1)	"LISTADO" CORRIENTE NOMINAL ----------------------------------------------<
