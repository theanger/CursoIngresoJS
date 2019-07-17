function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch ( mesDelAño ) { 
    
    case  "Enero":
    case  "Febrero":
    case  "Marzo":
    case  "Abril":
    case  "Mayo":
    case  "Junio":

    alert( "Que calor!");
    break;  
    
    
    case "Julio":
    case "Agosto":
    alert ("Que ofri!");
    break;
    
    case "Septiembre":
    case "Octubre":
    case "Diciembre":
    alert("Ya pasamos el frio");
    break
      }

//alert (mesDelAño);




}//FIN DE LA FUNCIÓN