function aparecerEnpantalla(valor){
  document.getElementById('mostrar').innerHTML += valor;
}

function limpiarPantalla(){
    document.getElementById('mostrar').innerHTML = '';
}

function calcularResultado(){
    let expresion = document.getElementById('mostrar').innerHTML;

    try{
        // eval evalúa una cadena como expresión de JavaScript
     let resultado = eval(expresion);
     document.getElementById('mostrar').innerHTML = resultado;
    }catch(errror){
      document.getElementById('mostar').innerHTML = 'Error';
    }
}