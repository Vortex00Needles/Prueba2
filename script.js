function Sumar() {

var num1= document.getElementById("N1").value;
var num2= document.getElementById("N2").value;
var resultado= parseInt(num1)+parseInt(num2);
alert("La suma de los numeros es de: " +resultado);
}

function Restar() {

    var num1= document.getElementById("N1").value;
    var num2= document.getElementById("N2").value;
    var resultado2= parseInt(num1)-parseInt(num2);
    alert("La resta de los numeros es de: " +resultado2);
    }

    function Multiplicacion() {

        var num1= document.getElementById("N1").value;
        var num2= document.getElementById("N2").value;
        var resultado3= parseInt(num1)*parseInt(num2);
        alert("La multiplicacion de los numeros es de: " +resultado3);
        }

        function Division() {

            var num1= document.getElementById("N1").value;
            var num2= document.getElementById("N2").value;
            var resultado4= parseInt(num1)/parseInt(num2);
            alert("La division de los numeros es de: " +resultado4);
            }




function ver() {


var dato = document.getElementById("materia").value;

switch (dato) {
    case "programacion":
        alert("Usted a seleccionado programacion");
        
        break;
case "Soporte TI":
    alert("Usted a seleccionado Soporte TI");

        break;

    case "TICS":
        alert("Usted a seleccionado TICS");
        break;

    case "Diseno de software":
        alert("Usted a seleccionado Diseno de software");
        break;
       default:
           break;
         }
        }






function Edad(){

    var Ed = document.getElementById("Ed").value;
if(Ed>=18){

alert("Eres mayor de edad");
}

else{
    alert("Eres menor de edad");
}
}