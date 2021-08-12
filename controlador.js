//CONTROLAR LA ACTIVIDAD DEL FORMULARIO
let nombreConsola;
let precioConsola;
let pesoConsola;
let fotoConsola;
let rallita=document.getElementById("rallita");
let rallita2=document.getElementById("rallita2");

//let fotoCarrito;

//1. Controlar con JS el boton del formulario
let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");
let botoncop=document.getElementById("botoncom");

//2. Detectar el clic en el boton
boton.addEventListener("click",capturarDatos);
botonLimpiar.addEventListener("click",limpiarCarrito);


//3. Crear funcion PROPIA que se llamo en el punto 2
function capturarDatos(){

  

    //4. Capturar los valores del formulario
    // creo tantas variables como valores del formulario

    let consolaElegida=document.getElementById("productos").value;
    seleccionarConsola(consolaElegida);

    let cantidad=document.getElementById("cantidad").value;

  
    
    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
   
    pildora.classList.add("invisible");
    
    rallita.classList.add("invisible");
    
    rallita2.classList.add("invisible");
    
    


    
    let direccion=document.getElementById("comentarios").value;
    
    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src=fotoConsola;

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent=nombreConsola;

    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo Unitario: $${precioConsola} USD`;

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=`Peso Unitario: ${pesoConsola} Lb`;

    let pesoTotal=document.getElementById("pesoTotalCarrito");
    pesoTotal.textContent=`Peso Total Del Envio: ${pesoConsola*cantidad}Lb`;
    
    let costoCasillero=document.getElementById("costoCasillero");
    costoCasillero.textContent=`Costo Casillero: $${calcularCostoCasillero(pesoConsola,cantidad)} USD`;
    
    let costoImpuestos=document.getElementById("costoImpuestos");
    costoImpuestos.textContent=`Costo Venta(impuestos):$${calcularCostoImpuestos(precioConsola,cantidad)}`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total: $${(calcularCostoCasillero(pesoConsola,cantidad))+(calcularCostoImpuestos(precioConsola,cantidad))} USD`;

    pildora.classList.add("visible");
    rallita.classList.remove("invisible");
    rallita2.classList.remove("invisible");
}

//5. Seleccionar la información de la consola segun la selección del usuario
function seleccionarConsola(opcion){

    let consolas={
        nombres:Array("PS5","XBOX Serie X", "Nintendo Switch", "CARGADOR MANDO PS5", "CARGADOR MANDO XBOX", "CARGADOR MANDO NINTENDO"),
        precios:Array(750,700,409, 17.99,19.99 ,17.99 ),
        pesos:Array(14.2,13.1,4.75,8,10,01),
        fotos:Array("img/5play.jpg","img/nintendocargador.jpg","img/xbox.jpg","img/cargadorpd5.webp","img/nintendocargador.jpg","img/xboxcargador.jpg"),
        
    }

    if(opcion==1){

        nombreConsola=consolas.nombres[0];
        precioConsola=consolas.precios[0];
        pesoConsola=consolas.pesos[0];
        fotoConsola=consolas.fotos[0];

    }else if(opcion==2){

        nombreConsola=consolas.nombres[1];
        precioConsola=consolas.precios[1];
        pesoConsola=consolas.pesos[1];
        fotoConsola=consolas.fotos[1];

    }else if(opcion==3){

        nombreConsola=consolas.nombres[2];
        precioConsola=consolas.precios[2];
        pesoConsola=consolas.pesos[2];
        fotoConsola=consolas.fotos[2];

    }else if(opcion==4){

        nombreConsola=consolas.nombres[3];
        precioConsola=consolas.precios[3];
        pesoConsola=consolas.pesos[3];
        fotoConsola=consolas.fotos[3];

    }else if(opcion==5){

        nombreConsola=consolas.nombres[4];
        precioConsola=consolas.precios[4];
        pesoConsola=consolas.pesos[4];
        fotoConsola=consolas.fotos[4];

    }else if(opcion==6){

        nombreConsola=consolas.nombres[5];
        precioConsola=consolas.precios[5];
        pesoConsola=consolas.pesos[5];
        fotoConsola=consolas.fotos[5];

    }else{
        nombreConsola=null;
        precioConsola=null;
        pesoConsola=null;
        fotoConsola=null;

    }


}

function calcularCostoCasillero(pesoConsola,cantidad){

    let costoCasillero=0;
    let pesoTotalEnvio=pesoConsola*cantidad;

    if(pesoTotalEnvio<=20){

        costoCasillero=85;

    }else{ 

        let pesoExtra=pesoTotalEnvio-20;
        costoCasillero=85+(pesoExtra*2);

    }
    
    return costoCasillero;
}

function calcularCostoImpuestos(costoConsola,cantidad){

    const IMPUESTO_PAIS=114;
    const VALOR_SEGURO=7;

    let costoCompra=costoConsola*cantidad;
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
  
    rallita.classList.add("invisible")
    rallita2.classList.add("invisible")


}
function botoncop(){
 console.log("hiciste clic en cop");
}