var num1, num2;
var respuesta;
var OpCorrecta;

text_suma = document.getElementById("suma");
ocionpcion1 = document.getElementById("opcion1");
opcion2 = document.getElementById("opcion2");
opcion3 = document.getElementById("opcion3");
text_msj = document.getElementById("msj");
text_resultado = document.getElementById("resultado");

function comenzar(){
    text_resultado.innerHTML = "?";
	text_msj.innerHTML = "";
	num1 = Math.round(Math.random()*20);
	num2 = Math.round(Math.random()*20);
	respuesta = num1 + num2;
	text_suma.innerHTML = num1 + " + " + num2 + " = ";
	OpCorrecta = Math.round(Math.random()*2);
	
	if(OpCorrecta == 0){
		opcion1.innerHTML = respuesta;
		opcion2.innerHTML = respuesta + 1;
		opcion3.innerHTML = respuesta - 1
	}
	
	if(OpCorrecta == 1){
		opcion2.innerHTML = respuesta;
		opcion1.innerHTML = respuesta +2;
		opcion3.innerHTML = respuesta - 1;
	}
	
	if(OpCorrecta == 2){
		opcion3.innerHTML = respuesta;
		opcion1.innerHTML = respuesta + 1;
		opcion2.innerHTML = respuesta - 1;
	}
}

function controlarRespuesta(opcionElegida){	
	text_resultado.innerHTML = opcionElegida.innerHTML;
	if(respuesta == opcionElegida.innerHTML){
		text_msj.innerHTML = "EXCELENTE!!";
		text_msj.style.color="black";
		setTimeout(comenzar, 2000);
}else{
		text_msj.innerHTML = "INTENTA DE NUEVO!!";
		text_msj.style.color="red";
		setTimeout(limpiar,2000);

	}
}
function limpiar(){
	text_resultado.innerHTML = "?";
	text_msj.innerHTML = "";
}
comenzar();
