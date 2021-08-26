let pedidos=[

    {
        id:1,
        nombre:"caja de arena",
        precio:550,
        peso:055,
        cantidad:2,
        foto:"https://m.media-amazon.com/images/I/71zcnMsr1sL._AC_SL1500_.jpg"

    },

    {
        id:2,
        nombre:"comedor",
        precio:750,
        peso:9.55,
        cantidad:1,
        foto:"https://m.media-amazon.com/images/I/61x47+boTLL._AC_SL1000_.jpg"

    }
];

let contenedorPadre=document.getElementById("padre");
//forEach es para dar vueltas 

pedidos.forEach(function(pedido){
    
    let columna=document.createElement("div");
    columna.classList.add("col");

    let cuerpo=document.createElement("div");
    cuerpo.classList.add("card");
    cuerpo.classList.add("h-100");

    let imagen=document.createElement("img");
    imagen.classList.add("card-img-top");
    imagen.src=pedido.foto;

    let cuerpoo=document.createElement("div");
    cuerpoo.classList.add("card-boby");

    let titulo=document.createElement("h5");
   titulo.classList.add("card-title");
   titulo.textcontent=`producto:${pedido.nombre}`;

   let texto=document.createElement("p");
   texto.classList.add("card-title");
   texto.textcontent=`precio:${pedido.precio}`;

   let texto2=document.createElement("p");
   texto2.classList.add("card-title");
   texto2.textcontent=`peso:${pedido.peso}`;

   let texto3=document.createElement("p");
   texto3.classList.add("card-title");
   texto3.textcontent=`cantidad:${pedido.cantidad}`;
          
    
   contenedorPadre.appendChild(columna);
   columna.appendChild(cuerpo);
   cuerpo.appendChild(imagen);
   cuerpo.appendChild(cuerpoo);
   cuerpoo.appendChild(titulo);
   cuerpoo.appendChild(texto);
   cuerpoo.appendChild(texto2);
   cuerpoo.appendChild(texto3);


   



   


});