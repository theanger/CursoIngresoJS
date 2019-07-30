function mostrar()
{

	numero = parseInt (prompt("ingrese un número entre 0 y 10."));
  
while (numero <0  || numero >10 ||  isNaN(numero) )
{  numero= parseInt (prompt ("Mal ingresado, ingrese numero entre 1 y 10")); }
document.getElementById("Numero").value= numero;
//alert ("ingreso el numero" + numero);
}//FIN DE LA FUNCIÓN