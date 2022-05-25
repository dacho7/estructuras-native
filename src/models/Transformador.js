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
    },
    {
      name: "direccion",
      label: "Dirección",
      type: "string",
    },
    {
      name: "fases",
      label: "Fases",
      type: "string",
    },
    {
      name: "fparent",
      label: "FParent",
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
      name: "trftype",
      label: "TRF type",
      type: "string",
    },
    {
      name: "poblacion",
      label: "Población",
      type: "string",
    },
    {
      name: "date_instalacion",
      label: "Fecha de Instalación",
      type: "date",
      format: "birthdate-full",
    },
    {
      name: "type",
      label: "Type",
      type: "int",
    },
    {
      name: "tiposub",
      label: "Tipo Sub",
      type: "string",
    },
    {
      name: "islight",
      label: "ISLIGHT",
      type: "int",
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
    },
    {
      name: "departamento",
      label: "Departamento",
      type: "string",
    },
    {
      name: "marca",
      label: "Marca",
      type: "string",
    },
  ],
];

//Propiedad se cambio los datos de
//que es type
