// Inicializacion de variables 
let tarjetasdestapadas= 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos= 0;
let aciertos = 0;
let temporizador = false;
let timer = 60;
let tiempoRegresivoId = null;
let timerInicial = 60;

// docs HTML
let mostrarmovimientos = document.getElementById('Movimientos');
let mostrarAciertos = document.getElementById('Aciertos');
let mostrarTiempo = document.getElementById (`Tiempo`);

// Numeros desordenados
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort (()=>{return Math.random ()-0.5});
console.log(numeros);

//funciones
function contarTiempo (){
    tiempoRegresivoId = setInterval(()=> {
        timer--;
        mostrarTiempo.innerHTML= `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval (tiempoRegresivoId);
            bloquearTarjetas  ();
        }
     },1000);
}

function bloquearTarjetas(){
    for (let i = 0; i<=15; i++ ){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML= numeros [i];
        tarjetaBloqueada.disabled= true;
    }
}

// Funcion principal
function destapar(id){
    if (temporizador == false){
        contarTiempo();
        temporizador = true;
    }
    tarjetasdestapadas++;
    console.log(tarjetasdestapadas);

    if(tarjetasdestapadas == 1){
        // mostrar numero uno
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML = primerResultado;

        //Deshabilitar primer boton
    tarjeta1.disabled = true;
}else if(tarjetasdestapadas ==2){
    //Mostar segundo numero
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = segundoResultado;

    //Deshabilitar segundo boton
    tarjeta2.disabled = true;

    //incrementar movimientos
    movimientos++;
    mostrarmovimientos.innerHTML =`Movimientos: ${movimientos}`;

    if(primerResultado == segundoResultado){
        //cerar contador tarjetas destapadas
        tarjetasdestapadas = 0;

        //aumentar aciertos
        aciertos++;
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

        if(aciertos == 8){
            clearInterval( tiempoRegresivoId);
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
            mostrarTiempo.innerHTML = ` GENIAL! demoraste solo ${timerInicial - timer} segundos`
            mostrarmovimientos.innerHTML= `Movimientos: ${movimientos}`;
        }
    } 
 }else{
    //mostrar los valores y taparlos
    setTimeout(()=>{
        tarjeta1.innerHTML= ``;
        tarjeta2.innerHTML= ``;
        tarjeta1.disabled= false;
        tarjeta2.disabled= false;
        tarjetasdestapadas= 0;
    },500);
    }
    
    }
    


 

