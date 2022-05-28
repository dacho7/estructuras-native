export const TransformadorModel = [
  {
    databaseName: "transformadores",
    registerLabel: "Registrar Transformador",
    updateLabel: "Actualizar Transformador",
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
    },
    {
      name: "fparent",
      label: "FParent",
      type: "string",
      format: "default",
    },
    {
      name: "propiedad",
      label: "Propiedad",
      type: "string",
      format: "default",
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
      name: "trftype",
      label: "TRF type",
      type: "string",
      format: "default",
    },
    {
      name: "poblacion",
      label: "Población",
      type: "string",
      format: "default",
    },
    {
      name: "date_instalacion",
      label: "Fecha de Instalación",
      type: "date",
    },
    {
      name: "type",
      label: "Type",
      type: "string",
      format: "default",
    },
    {
      name: "tiposub",
      label: "Tipo Sub",
      type: "string",
      format: "default",
    },
    {
      name: "islight",
      label: "ISLIGHT",
      type: "string",
      format: "default",
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
      name: "municipio",
      label: "Municipio",
      type: "string",
      format: "default",
    },
    {
      name: "departamento",
      label: "Departamento",
      type: "string",
      format: "default",
    },
    {
      name: "marca",
      label: "Marca",
      type: "string",
      format: "default",
    },
  ],
];

//Propiedad se cambio los datos de
//que es type
