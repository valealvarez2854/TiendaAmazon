//CONTROLAR LA ACTIVIDAD DEL FORMULARIO
let nombreproducto;
let precioproducto;
let pesoproducto;
let fotoproducto;
let raya=document.getElementById("raya");
let raya2=document.getElementById("raya2");


//1. Controlar con JS el boton del formulario
let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");
let botoncop=document.getElementById("botoncop");

//2. Detectar el clic en el boton
boton.addEventListener("click",capturarDatos);
botonLimpiar.addEventListener("click",limpiarCarrito);
botoncop.addEventListener("click",convertir);

//3. Crear funcion PROPIA que se llamo en el punto 2
function capturarDatos(){

    //4. Capturar los valores del formulario
    // creo tantas variables como valores del formulario

    let productoelegido=document.getElementById("productos").value;
    seleccionarproducto(productoelegido);

    let cantidad=document.getElementById("cantidad").value;
    
    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
    pildora.classList.remove("invisible");
    pildora.classList.add("visible");
    
    

    
    let direccion=document.getElementById("comentarios").value;
    
    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src=fotoproducto;

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent=nombreproducto;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${precioproducto} USD`;

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=`Peso unitario: ${pesoproducto} Lb`;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=`Peso Total del envio: ${pesoproducto*cantidad}Lb`;
    
    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoproducto,cantidad)} USD`;
    
    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta(impuestos):$${calcularCostoImpuestos(precioproducto,cantidad)}`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoproducto,cantidad))+(calcularCostoImpuestos(precioproducto,cantidad))} USD`;
    
    let precioDolar=document.getElementById("costoDolar")
  


}

//5. Seleccionar la información de la consola segun la selección del usuario
function seleccionarproducto(opcion){

    let producto={
        nombres:Array("Caja de arena autolimpiante","Comedero Neater Pet Brand","Fuente de agua de acero inoxidable ","PUPPBUDD cama ","Pet Gear-Cochecito"," Removedor de pelo para mascotas para muebles","Alimentador automatico","Domaker Asiento elevador de coche","Guante removedor de pelo de mascotas","Percha para ventana de gato","GAPZER Mochila para mascota","Viglley Washable Dog Pee Pads"," Toalla de baño","Corta uñas para mascotas"),
        precios:Array(139.95,59.99,40.75,21.99,35.99 ,19.66,58.99,12.99,20.99,41.59,37.95,15.99,8.49,4.20,520 ),
        pesos:Array(14.2,13.1,4.75,0.7275,0.489375,0.1675,452,15.7,39.7,10.2,10.2,27.6,0.19,520,680,40.0),
        fotos:Array("img/arenero,jpg","img/comedero.jpg","img/fuente.jpg","img/cama.jpg","img/coche.jpg","img/removedor.jpg","img/alimentador.jpg","img/asiento.jpg","img/guante.jpg","img/percha.jpg","img/mochila.jpg","img/corral.jpg","img/toalla.jpg","img/cortauñas.jpg"),
        
    }

    if(opcion==1){

        nombreproducto=producto.nombres[0];
        precioproducto=producto.precios[0];
        pesoproducto=producto.pesos[0];
        fotoproducto=consolas.fotos[0];

    }else if(opcion==2){

        noombreproducto=producto.nombres[1];
        precioproducto=producto.precios[1];
        pesoproducto=producto.pesos[1];
        fotoproducto=producto.fotos[1];

    }else if(opcion==3){

        noombreproducto=producto.nombres[2];
        precioproducto=producto.precios[2];
        pesoproducto=producto.pesos[2];
        fotoproducto=producto.fotos[2];

    }else if(opcion==4){

        nombreproducto=producto.nombres[3];
        precioConsola=producto.precios[3];
        pesoConsola=producto.pesos[3];
        fotoConsola=producto.fotos[3];

    }else if(opcion==5){

        nombreproducto=producto.nombres[4];
        precioproducto=producto.precios[4];
        pesoproducto=producto.pesos[4];
        fotoproducto=producto.fotos[4];

    }else if(opcion==6){

        nombreproducto=producto.nombres[5];
        precioproducto=producto.precios[5];
        pesoproducto=producto.pesos[5];
        fotoproducto=producto.fotos[5];

    }else if(opcion==7){

        nombreproducto=producto.nombres[6];
        precioproducto=producto.precios[6];
        pesoproducto=producto.pesos[6];
        fotoproducto=producto.fotos[6];

    }else if(opcion==8){

        nombreproducto=producto.nombres[7];
        precioproducto=producto.precios[7];
        pesoproducto=producto.pesos[7];
        fotoproducto=producto.fotos[7];

    }else if(opcion==9){9
        nombreproducto=producto.nombres[8];
        precioproducto=producto.precios[8];
        pesoproducto=producto.pesos[8];
        fotoproducto=producto.fotos[8];

    }else if(opcion==10){

        nombreproducto=producto.nombres[9];
        precioproducto=producto.precios[9];
        pesoproducto=producto.pesos[9];
        fotoproducto=producto.fotos[9];

    }else if(opcion==11){

        nombreproducto=producto.nombres[10];
        precioproducto=producto.precios[10];
        pesoproducto=producto.pesos[10];
        fotoproducto=producto.fotos[10];

    }else if(opcion==12){

        nombreproducto=producto.nombres[11];
        precioproducto=producto.precios[11];
        pesoproducto=producto.pesos[11];
        fotoproducto=producto.fotos[11];

    }else if(opcion==13){

        nombreproducto=producto.nombres[12];
        precioproducto=producto.precios[12];
        pesoproducto=producto.pesos[12];
        fotoproducto=producto.fotos[12];

    }else if(opcion==14){

        nombreproducto=producto.nombres[13];
        precioproducto=producto.precios[13];
        pesoproducto=producto.pesos[13];
        fotoproducto=producto.fotos[13];

    }else if(opcion==15){

        nombreproducto=producto.nombres[14];
        precioproducto=producto.precios[14];
        pesoproducto=producto.pesos[14];
        fotoproducto=producto.fotos[14];

    }else{
        nombreproducto=null;
        precioproducto=null;
        pesoproducto=null;
        fotoproducto=null;

    }


}

function calcularCostoCasillero(pesoproducto,cantidad){

    let costoCasillero=0;
    let pesoTotalEnvio=pesoproducto*cantidad;

    if(pesoTotalEnvio<=20){

        costoCasillero=85;

    }else{ 

        let pesoExtra=pesoTotalEnvio-20;
        costoCasillero=85+(pesoExtra*2);

    }
    
    return costoCasillero;
}

function calcularCostoImpuestos(costoproducto,cantidad){

    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoCompra=costoproducto*cantidad;
    let costoTotal=costoCompra+IMPUESTO_PAIS+VALOR_SEGURO;

    return costoTotal;

} 


function limpiarCarrito(){

    console.log("Hiciste clic en limpiar");
    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src="https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/fotoCarrito.PNG?raw=true";
    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent="Tu Carrito De Amazon Esta Vasio";
    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent="";
    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent="";
    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent="";
    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent="";
    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent="";
    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent="";
    
    pildora.classList.add("invisible");
    raya.classList.add("invisible");
    raya2.classList.add("invisible");

  
   

}
function convertir(){

    moneda=true;

    let botoncop=document.getElementById("convertir");
    botoncop.textContent="cop ($)"

    let cantidad=document.getElementById("cantidad").value;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo unitario: $${precioproducto} USD`;

    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoproducto,cantidad)} USD`;

    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo venta(impuestos):$${calcularCostoImpuestos(precioproducto,cantidad)} USD`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoproducto,cantidad))+(calcularCostoImpuestos(precioproducto,cantidad))} USD`;

}