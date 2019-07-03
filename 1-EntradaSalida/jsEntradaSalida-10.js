/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var numero1;
    var resto;
     
  numero1= document.getElementById("importe").value;
  
  numero1= parseInt(numero1);

  resto= numero1 * 25 /100

  document.getElementById("resultado").value= numero1- resto ;

}
