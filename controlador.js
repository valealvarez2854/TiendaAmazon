//Controlar actividad del formulario
let nombreConsola;
let precioConsola;
let pesoConsola;
let fotoConsola;
//1.controlar el boton
let boton=document.getElementById("boton");
let botonLimpiar=document.getElementById("botonLimpiar");

//2.detectar click en el boton
boton.addEventListener("click",capturarDatos);
botonLimpiar.addEventListener("click",limpiarCarrito);
//3.crear funcion propia
function capturarDatos(){

    //4.capturar los valores del formulario
     let consolaElegida=document.getElementById("productos").value;
     seleccionarConsola(consolaElegida);

     let cantidad=document.getElementById("cantidad").value;
    
    let pildora=document.getElementById("pildora");
    pildora.textContent=cantidad;
    pildora.classList.remove("invisible");
    pildora.classList.add("visible");
    
    let direccion=document.getElementById("comentarios").value;
    
    let fotoCarrito=document.getElementById("fotoCarrito");
    fotoCarrito.src=fotoConsola;
    console.log(fotoCarrito);

    let tituloCarrito=document.getElementById("tituloCarrito");
    tituloCarrito.textContent=nombreConsola;

    
    let precioIndividual=document.getElementById("precioUnitarioCarrito");
    precioIndividual.textContent=`Costo Unitario: $${precioConsola} USD`;

    let pesoIndividual=document.getElementById("pesoUnitarioCarrito");
    pesoIndividual.textContent=`Peso Unitario: ${pesoConsola} LB`;
    
    let PesoTotalCarrito=document.getElementById("PesoTotalCarrito");
    PesoTotalCarrito.textContent=`Peso Total de la Consola: ${pesoConsola*cantidad} LB`;
     
    let CostoCasillero=document.getElementById("CostoCasiollero");
    CostoCasillero.textContent=`Costo Casillero: ${calcularCostoCasillero(pesoConsola,cantidad)} USD`;
    
    let constoImpuesto=document.getElementById("costoImpuestos");
    constoImpuesto.textContent=`Costo Venta (impuesto):$${calcularCostoImpuestos(precioConsola,cantidad)}`;

    let costoTotal=document.getElementById("costoTotal");
    costoTotal.textContent=`Costo Total $${(calcularCostoCasillero (pesoConsola,cantidad))+(calcularCostoImpuestos)}`;
    

}

// 5. selleccionar la informacion de la consola segun la seleccion del usuario
function seleccionarConsola(opcion){
    let consolas={
        nombres:Array("PS5","XBOX Serie X", "Nintendo Switch"),
        precios:Array(750,700,409),
        pesos:Array(14.2,13.1,4.75),
        fotos:Array("https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/ps5.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/xbox.jpg?raw=true","https://github.com/jjosegallegocesde/imagenes-amazon/blob/main/img/nintendo.jpg?raw=true")
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
        pesoConsola=consolas.pesos[2]
        fotoConsola=consolas.fotos[2];

    }else{
        nombreConsola=null;
        precioConsola=null;
        pesoConsola=null;
        fotoConsola=null;
    }
}
//2. Calcular el costo del casillero
function calcularCostoCasillero(pesoConsola,cantidad){

    let CostoCasillero=0;
    let pesoTotalEnvio=pesoConsola*cantidad;

    if(pesoTotalEnvio<=20){

        CostoCasillero=85;

    }else{ //Me paso del paso

        let pesoExtra=pesoTotalEnvio-20;
        CostoCasillero=85+(pesoExtra*2);

    }
    
    return CostoCasillero;
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


}