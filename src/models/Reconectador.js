export const ReconectadorModel = [
  {
    databaseName: "reconectadores",
    registerLabel: "Registrar Reconectador",
    updateLabel: "Actualizar Reconectador",
  },
  [
    { name: "codigo", label: "Código", type: "string", format: "numeric" },
    ,
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
      name: "propiedad",
      label: "Propiedad",
      type: "list2",
      values: [
        { label: "ALCALDIA", value: "ALCALDIA" },
        { label: "GOBERNACIÓN", value: "GOBERNACIÓN" },
        { label: "ESTADO", value: "ESTADO" },
        { label: "EEP", value: "EEP" },
        { label: "USUARIO", value: "USUARIO" },
        { label: "COMPARTIDO", value: "COMPARTIDO" },
      ],
    },
    {
      name: "direccion",
      label: "Dirección",
      type: "string",
    },
    {
      name: "fases",
      label: "Fases",
      type: "list2",
      values: [{ label: "Sin datos", value: "Sin datos" }],
    },
    {
      name: "fparent",
      label: "FParent",
      type: "list2",
      values: [{ label: "Sin datos", value: "Sin datos" }],
    },
    {
      name: "tparent",
      label: "TParent",
      type: "list2",
      values: [{ label: "Sin datos", value: "Sin datos" }],
    },
    {
      name: "amperios",
      label: "Amperios",
      type: "real",
      format: "decimal-pad",
    },
    {
      name: "kv",
      label: "Voltaje",
      type: "real",
      format: "decimal-pad",
    },
    {
      name: "uc",
      label: "Unidad Constructiva",
      type: "list2",
      values: [{ label: "Sin datos", value: "Sin datos" }],
    },
    {
      name: "material",
      label: "Material",
      type: "list2",
      values: [{ label: "Sin datos", value: "Sin datos" }],
    },
    {
      name: "sernumber",
      label: "Serial Number",
      type: "string",
    },
    {
      name: "date_inst",
      label: "Fecha Instalación",
      type: "date",
    },
    {
      name: "poblacion",
      label: "Población",
      type: "list2",
      values: [
        { label: "Urbano", value: "Urbano" },
        { label: "Rural", value: "Rural" },
        { label: "Centro Poblado", value: "Centro Poblado" },
      ],
    },
    {
      name: "poblacion",
      label: "Población",
      type: "date",
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

//CODIGO 	VARCHAR (32)	R+MUNICIPIO (MOC,VIL,GUZ,ORI,PIA)+CP+02
