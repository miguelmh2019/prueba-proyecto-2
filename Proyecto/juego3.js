//seleccionamos los elementos del DOM
let num1= document.querySelector("#num1");
let num2= document.querySelector("#num2");
let respuesta_usuario=document.querySelector("#respuesta_usuario");
let msj_correccion=document.querySelector("#msj_correccion");
let operacion=document.querySelector("#operacion");
let operacion_actual;
//en n1 y n2 voy a guardar los numeros aleatorios de cada operacion
let n1, n2;

//funcion suma
function btnSumar() {
    //limpiamos el divcontenerdor de las correcciones
    msj_correccion.innerHTML="";
    //agregamos la clase activa al boton suma
    activarBoton("suma");
    operacion_actual="+";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML="+";
    //generamos los numeros aleatorios de la suma
    nuevaSuma();
}

function nuevaSuma(){
    //generamos dos numeros aleatorios entre 0 y 9
    n1= parseInt(Math.random()*10);
    n2= parseInt(Math.random()*10);
    //asignamos numeros a las etiquetas
    num1.innerHTML=n1;
    num2.innerHTML=n2;
    //colocamos el curso en el input
    respuesta_usuario.focus();
}

//funcion producto
function btnProducto() {
    //limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML="";
    //agrgamos la clase activa al boton producto
    activarBoton("producto");
    operacion_actual="*";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML="x";
    //generamos los numeros aleatorios
    nuevoProducto();
}

function nuevoProducto() {
    //generamos dos numeros aleatorios entre 0 y 9
    n1= parseInt(Math.random()*10);
    n2= parseInt(Math.random()*10);
    //asignamos numeros a las etiquetas
    num1.innerHTML=n1;
    num2.innerHTML=n2;
    //colocamos el curso en el input
    respuesta_usuario.focus();
}

//funcion resta
function btnResta() {
    //limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML="";
    //agregamos la clase activa al boton suma
    activarBoton("resta");
    operacion_actual="-";
    //asignamso la operacion suma a la etiqueta
    operacion.innerHTML="-";
    //generamos los numeros aleatorios
    nuevaResta();
}

function nuevaResta() {
    //generamos dos numeros aleatorios entre 5 y 10
    n1= parseInt(Math.random()*5+5);
    //generamos un numero aleatorio entre 0 y 5 
    n2= parseInt(Math.random()*5);
    //asignamos los numeros a las etiquetas
    num1.innerHTML=n1;
    num2.innerHTML=n2;
    //colocamos el input ene el curso
    respuesta_usuario.focus();
}

//funcion division
function btnDivision() {
    //limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML="";
    //agregamos la clase activa al boton suma
    activarBoton("division");
    operacion_actual="/";
    //asignamos la operacion suma a la etiqueta
    operacion.innerHTML="/";
    //generamos los numeros aleatorios de la suma
    nuevaDivision();
}

function nuevaDivision() {
    // aqui se guardan los numeros divisores del numeroa dividir
    let divisores=[];

    //generamos un numero aleatorio entre 1 y 10
    n1= parseInt(Math.random()*9+1);

    //encontramos los divisores del numero generado
    for (var i=1; i<= n1; i++) {
        if(n1%i ===0){//es divisor
        divisores.push(i);
    }
    }

    //selecionamos possicion aleatoria de lso numeros
    let pos= parseInt(Math.random()*(divisores.length));

    n2=divisores[pos];
    num1.innerHTML=n1;
    num2.innerHTML=n2;
    respuesta_usuario.focus();
}

//funcion que controla si la respuesta es correcta
function corregir(){
    //si el usuario no ha ingresado nada no continua
    if (respuesta_usuario.value=="") {
        return;
    }

    let solucion;
    //armo la operacion que se genero en una variable y veo su resultado
    //en este caso el operador + es para concatenarlas cadenas
    let operacion=n1 + operacion_actual + n2;
    solucion= eval(operacion);

    //creo un elemento i para agregar el icono de correcto o incorrecto
    var i = document.createElement("i");
    //controlo si coincide lo que el usuario respondio con la solucion
    if(respuesta_usuario.value== solucion) {
        i.className= "fa-regular fa-face-grin";
    } else {
        i.className= "fa-regular fa-face-frown";
    }

    //agrego elemento al contenedor de las correcciones
    msj_correccion.appendChild(i);

    //controlo que tipo de operacion hago para generar una nueva operacion
    if(operacion_actual=="+") {
        nuevaSuma();
    } else if (operacion_actual=="-") {
        nuevaResta();
    } else if (operacion_actual=="*") {
        nuevoProducto();
    } else if (operacion_actual=="/") {
        nuevaDivision();
    }

    //limpio el input
    respuesta_usuario.value="";
}

//agrego al input el eventoonkeydown para detectar cuando se presiona enter 
//llamar directamente a la funcion corregir()
respuesta_usuario.onkeydown = function(e) {
    var ev= document.all ?window.event: e;
    if (ev.keyCode == 13) {
        corregir();
    }
}


//Esta funcion se crealuego de dar estilos
function activarBoton(idBoton) {
    document.getElementById("suma").className="";
    document.getElementById("resta").className="";
    document.getElementById("producto").className="";
    document.getElementById("division").className="";
    document.getElementById(idBoton).className="activado";
}
    

    

   
   
 
 




















