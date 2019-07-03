/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var suma1;
var suma2;
var suma3;
var total;
var promedio;

function Sumar () 
{ 

    suma1=document.getElementById("PrecioUno").value;
    suma2=document.getElementById("PrecioDos").value;
    suma3=document.getElementById("PrecioTres").value; 
    
    suma1= parseInt(suma1);
    suma2= parseInt(suma2);
    suma3= parseInt(suma3);
     total= suma1 + suma2 + suma3;
    alert ("La suma total es " + total);
}
function Promedio () 
{ 
    suma1=document.getElementById("PrecioUno").value;
    suma2=document.getElementById("PrecioDos").value;
    suma3=document.getElementById("PrecioTres").value; 
    
    suma1= parseInt(suma1);
    suma2= parseInt(suma2);
    suma3= parseInt(suma3);
     total= suma1 + suma2 + suma3;
     promedio= total/ 3;
    alert ("El promedio total es " + promedio);
	
}
function PrecioFinal () 
{
    suma1=document.getElementById("PrecioUno").value;
    suma2=document.getElementById("PrecioDos").value;
    suma3=document.getElementById("PrecioTres").value; 
    
    suma1= parseInt(suma1);
    suma2= parseInt(suma2);
    suma3= parseInt(suma3);
     total= suma1 + suma2 + suma3;
     promedio= total * 21 /100
    alert ("El total es " + promedio + total);
	
}