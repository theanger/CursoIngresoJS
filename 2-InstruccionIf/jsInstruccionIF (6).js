function mostrar()
{
//tomo la edad  

var Edad= parseInt(document.getElementById("edad").value);

if (Edad >=18)
{ alert("Es mayor de edad");  }

else if (Edad <13)

{  alert ("Es menor de edad"); }

else  //if ( Edad >=13 && Edad <=17)
{alert ("Es adolescente"); }

}//FIN DE LA FUNCIÓN