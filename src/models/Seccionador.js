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
      format: "default",
    },
    {
      name: "direccion",
      label: "Dirección",
      type: "string",
      format: "default",
    },
    {
      name: "fases",
      label: "Fases",
      type: "string",
      format: "default",
      values: [
        { label: "A", value: "A" },
        { label: "B", value: "B" },
        { label: "C", value: "C" },
      ],
    },
    {
      name: "circuito",
      label: "Circuito",
      type: "string",
      format: "default",
      values: [{ label: "Sin Datos", value: "Sin Datos" }],
    },

    {
      name: "kv",
      label: "Voltaje Nominal",
      type: "string",
      format: "default",
      values: [{ label: "Sin Datos", value: "Sin Datos" }],
    },
    {
      name: "amp",
      label: "Corriente Nominal",
      type: "string",
      format: "default",
      values: [{ label: "Sin Datos", value: "Sin Datos" }],
    },
    {
      name: "tipo",
      label: "Tipo Seccionador",
      type: "real",
      format: "numeric",
    },
    {
      name: "estado",
      label: "Estado",
      type: "string",
      format: "default",
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
    },
    {
      name: "monotipo",
      label: "Monotipo",
      type: "string",
      format: "default",
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
