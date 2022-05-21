export const AcometidaModel = [
    ["acometida"],
    [
        {name: "codigo", label:"Código",type: "string"},
        {name: "fases", label:"Fases", type:"list"},
        {name: "transformador", label:"Transformador", type:"list"},
        {name: "circuito", label:"Circuito", type:"list", values: ["CP12","CP13","CP14","17","21","22","23","24","25","31","32","33","45","46"]},
        {name: "nodo", label:"Nodo-Poste", type:"string"},
        {name: "conductor", label:"Conductor", type:"list"},
        {name: "neutro", label:"Neutro", type:"list"},
        {name: "poblacion", label:"Población", type:"list", values:["Urbano","Rural","Centro Poblado"]},
        {name: "fecha_levantamiento", label:"Fecha de Levantamiento", type:"date"},
        {name: "latitud_niu", label:"Latitud-Niu", type:"real"},
        {name: "longitud_niu", label:"Longitu-Niu", type:"real"},
        {name: "latitud_poste", label:"Latitud-Poste", type:"real"},
        {name: "longitud_poste", label:"longitud-Poste", type:"real"},
    ]
]