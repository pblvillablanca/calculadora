var calculadora = (function(){

  var num1;
  var num2;
  var operacion;

  document.getElementById("on").onmousedown = agrandaTecla;
  document.getElementById("sign").onmousedown = agrandaTecla;
  document.getElementById("raiz").onmousedown = agrandaTecla;
  document.getElementById("dividido").onmousedown = agrandaTecla;
  document.getElementById("punto").onmousedown = agrandaTecla;
  document.getElementById("igual").onmousedown = agrandaTecla;
  document.getElementById("mas").onmousedown = agrandaTecla;
  document.getElementById("por").onmousedown = agrandaTecla;
  document.getElementById("menos").onmousedown = agrandaTecla;
  document.getElementById("0").onmousedown = agrandaTecla;
  document.getElementById("1").onmousedown = agrandaTecla;
  document.getElementById("2").onmousedown = agrandaTecla;
  document.getElementById("3").onmousedown = agrandaTecla;
  document.getElementById("4").onmousedown = agrandaTecla;
  document.getElementById("5").onmousedown = agrandaTecla;
  document.getElementById("6").onmousedown = agrandaTecla;
  document.getElementById("7").onmousedown = agrandaTecla;
  document.getElementById("8").onmousedown = agrandaTecla;
  document.getElementById("9").onmousedown = agrandaTecla;



  document.getElementById("on").onmouseup = achicaTecla;
  document.getElementById("sign").onmouseup = achicaTecla;
  document.getElementById("raiz").onmouseup = achicaTecla;
  document.getElementById("dividido").onmouseup = achicaTecla;
  document.getElementById("punto").onmouseup = achicaTecla;
  document.getElementById("igual").onmouseup = achicaTecla;
  document.getElementById("mas").onmouseup = achicaTecla;
  document.getElementById("por").onmouseup = achicaTecla;
  document.getElementById("menos").onmouseup = achicaTecla;
  document.getElementById("0").onmouseup = achicaTecla;
  document.getElementById("1").onmouseup = achicaTecla;
  document.getElementById("2").onmouseup = achicaTecla;
  document.getElementById("3").onmouseup = achicaTecla;
  document.getElementById("4").onmouseup = achicaTecla;
  document.getElementById("5").onmouseup = achicaTecla;
  document.getElementById("6").onmouseup = achicaTecla;
  document.getElementById("7").onmouseup = achicaTecla;
  document.getElementById("8").onmouseup = achicaTecla;
  document.getElementById("9").onmouseup = achicaTecla;


  document.getElementById("0").onclick = agregarValorPantalla;
  document.getElementById("1").onclick = agregarValorPantalla;
  document.getElementById("2").onclick = agregarValorPantalla;
  document.getElementById("3").onclick = agregarValorPantalla;
  document.getElementById("4").onclick = agregarValorPantalla;
  document.getElementById("5").onclick = agregarValorPantalla;
  document.getElementById("6").onclick = agregarValorPantalla;
  document.getElementById("7").onclick = agregarValorPantalla;
  document.getElementById("8").onclick = agregarValorPantalla;
  document.getElementById("9").onclick = agregarValorPantalla;

  document.getElementById("on").onclick = resetearPantalla;
  document.getElementById("punto").onclick = agregarPunto;
  document.getElementById("sign").onclick = agregarQuitarValorNegativo;

  document.getElementById("mas").onclick = function(){
     var valorActual = document.getElementById("display").innerText;
     num1 = valorActual;
     document.getElementById("display").innerHTML="";
     operacion = "suma";
  };

  document.getElementById("menos").onclick = function(){
     var valorActual = document.getElementById("display").innerText;
     num1 = valorActual;
     document.getElementById("display").innerHTML="";
     operacion = "resta";
  };

  document.getElementById("por").onclick = function(){
     var valorActual = document.getElementById("display").innerText;
     num1 = valorActual;
     document.getElementById("display").innerHTML="";
     operacion = "multi";
  };

  document.getElementById("dividido").onclick = function(){
     var valorActual = document.getElementById("display").innerText;
     num1 = valorActual;
     document.getElementById("display").innerHTML="";
     operacion = "divi";
  };



  document.getElementById("igual").onclick = function(){
     var valorActual = document.getElementById("display").innerText;
     num2 = valorActual;

     if(operacion == "suma"){
        calculadora.sumar();
     }
     if(operacion == "resta"){
        calculadora.restar();
     }
     if(operacion == "multi"){
        calculadora.multiplicar();
     }
     if(operacion == "divi"){
        calculadora.dividir();
     }

  };

  return{

      sumar:function(){
        var resultado = parseInt(num1) + parseInt(num2);
        document.getElementById("display").innerHTML=resultado;
        return;
      },
      restar:function(){
        var resultado = parseInt(num1) - parseInt(num2);
        document.getElementById("display").innerHTML=resultado;
        return;
      },
      multiplicar:function(){
        var resultado = parseInt(num1) * parseInt(num2);
        document.getElementById("display").innerHTML=resultado;
        return;
      },
      dividir:function(){
        var resultado = parseInt(num1) / parseInt(num2);
        document.getElementById("display").innerHTML=resultado;
        return;
      }
  }

})();

//Eventos cambioClick
function agrandaTecla(){
   this.style="transform: scale(1.1)";
}

function achicaTecla(){
   this.style="transform: scale(1.0)";
}

function agregarValorPantalla(){

   var pantalla = document.getElementById("display");
   var valorActual = pantalla.innerText;

   if(valorActual == "0")
        valorActual="";
   if(valorActual.length > 7 )
        return;

   var valorNuevo=valorActual+""+this.id;
   pantalla.innerHTML=valorNuevo;

}

function resetearPantalla(){

   var pantalla = document.getElementById("display");
   pantalla.innerHTML="0";
}

function agregarPunto(){

  var pantalla = document.getElementById("display");
  var valorActual = pantalla.innerText;

  if(valorActual.endsWith("."))
    return;

  pantalla.innerHTML=valorActual+".";
}

function agregarQuitarValorNegativo(){

  var pantalla  = document.getElementById("display");
  var valorActual = pantalla.innerText;

  if(valorActual == "0")
      return;

  var nuevoValor = "";
  if(valorActual.startsWith("-")){
    nuevoValor = valorActual.substring(1,valorActual.length);
  }
  else{
    nuevoValor = "-"+valorActual;
  }
  pantalla.innerHTML=nuevoValor;
}
