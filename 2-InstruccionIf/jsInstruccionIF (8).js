function mostrar()
{
//tomo la edad  

var Edad= parseFloat(document.getElementById("edad").value);
var civil= document.getElementById("estadoCivil").value;

if (Edad >18 && civil == "Soltero")  

{ alert("Es soltero y no es menor"); }


}//FIN DE LA FUNCIÓN