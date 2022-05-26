export const PostesModel = [
  {
    databaseName: "postes",
    registerLabel: "Registrar Poste",
    updateLabel: "Actualizar Poste",
  },
  [
    { name: "codigo", label: "Código", type: "string", format: "numeric" },
    {
      name: "insta",
      label: "Fecha Instalación",
      type: "date",
    },
  ],
];
