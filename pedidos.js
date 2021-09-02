let pedidos=[

    {
        id:1,
        nombre:"caja de arena",
        precio:550,
        peso:055,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/71zcnMsr1sL._AC_SL1500_.jpg"

    },

    {
        id:2,
        nombre:"comedor",
        precio:750,
        peso:9.55,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/81pd70ksgpL._AC_SL1500_.jpg"

    },
    {
        id:3,
        nombre:"fuente de agua ",
        precio:40.75,
        peso:4.75,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/71E38VzZCUL._AC_SL1500_.jpg"

    },
    {
        id:4,
        nombre:"PUPPBUDD cama",
        precio:40.75,
        peso:4.75,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/71aofUmLoBL._AC_SL1500_.jpg"

    },
    {
        id:5,
        nombre:"Pet Gear-Cochecito",
        precio:35.99,
        peso:0.489375,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/91kSTQ7fHpL._AC_SL1500_.jpg"

    },
    {
        id:6,
        nombre:"Removedor de pelo para muebles",
        precio:19.66 ,
        peso:19.66 ,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/51gD2lPu2UL._AC_SL1010_.jpg"

    },
    {
        id:7,
        nombre:"Alimentador automatico",
        precio:58.99,
        peso:452,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/41UX5lu4esL._AC_.jpg"

    },
    {
        id:8,
        nombre:"Domaker Asiento elevador de coche",
        precio:12.99 ,
        peso:15.7 ,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/71vTdaYhQcL._AC_SL1000_.jpg"

    },
    {
        id:9,
        nombre:"Guante removedor de pelo ",
        precio:20.99 ,
        peso:39.7 ,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/71xOcj1dVGL._AC_SL1000_.jpg"

    },
    {
        id:10,
        nombre:"Percha para ventana de gato",
        precio:41.59 ,
        peso:10.2 ,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/81sq7e-WSNL._AC_SL1500_.jpg"

    },
    {
        id:11,
        nombre:"GAPZER Mochila para mascota",
        precio:37.95 ,
        peso:10.2 ,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/71gnKIBb95L._AC_SL1500_.jpg"

    },
    {
        id:12,
        nombre:"Viglley Washable Dog Pee Pads",
        precio:15.99 ,
        peso:27.6 ,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/61PXBcdBquS._AC_SL1001_.jpg"

    },
    {
        id:13,
        nombre:"Toalla de baño",
        precio:8.49 ,
        peso:0.19,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/814DI8RWtqL._AC_SL1500_.jpg"

    },
    {
        id:14,
        nombre:"Corta uñas para mascotas",
        precio:4.2,
        peso:520,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/61OlzKFvDlL._AC_SL1500_.jpg"

    },
    {
        id:15,
        nombre:"Rastreador GPS",
        precio:209.99,
        peso:0.6 ,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/71CNuESb9CS._AC_SL1000_.jpg"

    }
];

let contenedorPadre=document.getElementById("padre");
//forEach es para dar vueltas 

pedidos.forEach(function(pedido){
    
    let columna=document.createElement("div");
    columna.classList.add("col");

    let tarjeta=document.createElement("div");
    tarjeta.classList.add("card");
    tarjeta.classList.add("h-100");

    let imagen=document.createElement("img");
    imagen.classList.add("card-img-top");
    imagen.classList.add("img-fluid");
    imagen.src=pedido.foto;

    let cuerpo=document.createElement("div");
    cuerpo.classList.add("card-boby");

    let titulo=document.createElement("h5");
   titulo.classList.add("card-title");
   titulo.textContent=`producto:${pedido.nombre}`;

   let texto=document.createElement("p");
   texto.classList.add("card-title");
   texto.textContent=`precio:${pedido.precio}`;

   let texto2=document.createElement("p");
   texto2.classList.add("card-title");
   texto2.textContent=`peso:${pedido.peso}`;

   let texto3=document.createElement("p");
   texto3.classList.add("card-title");
   texto3.textContent=`cantidad:${pedido.cantidad}`;


   let boton=document.createElement("button");
   boton.classList.add("btn");
   boton.classList.add("btn-outline-success");
   boton.classList.add("btn-dark");
   boton.classList.add("w-100");

    let boton2=document.createElement("button");
    boton2.classList.add("btn");       
    boton2.classList.add("btn-dark");
    boton2.classList.add("btn-outline-danger");
    boton2.classList.add("w-100");
    boton2.classList.add("mt-3");

    let icono=document.createElement("i");
    icono.classList.add("fa-pencil-alt");
    icono.classList.add("fas"); 

    let icono2=document.createElement("i");
    icono2.classList.add("fa-trash-alt");
    icono2.classList.add("fas"); 


    boton.appendChild(icono)
    boton2.appendChild(icono2)
    cuerpo.appendChild(titulo)
    cuerpo.appendChild(texto)
    cuerpo.appendChild(texto2)
    cuerpo.appendChild(texto3)
    cuerpo.appendChild(boton)
    cuerpo.appendChild(boton2)
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(cuerpo)
    columna.appendChild(tarjeta)
    contenedorPadre.appendChild(columna)



   



   


});