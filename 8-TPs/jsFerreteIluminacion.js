/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{ var Lamparas= parseInt(35);
  var Cantidad= parseInt(document.getElementById("Cantidad").value);
  var Marca= document.getElementById("Marca").value;
  var Valor= parseInt (Lamparas* Cantidad);
  var descuento= parseInt;
  var impuesto= parseInt;
  
 
  if (Cantidad >=6)
  { descuento = Valor * 50 /100    
   document.getElementById("precioDescuento").value= Valor- descuento; }
 
  else if (Cantidad == 5 && Marca == "ArgentinaLuz" )
   { descuento= Valor * 40/100  
     document.getElementById("precioDescuento").value= Valor- descuento;  }

    else if (Cantidad==5 && Marca != "ArgentinaLuz")
    { descuento= Valor* 30 / 100     
     document.getElementById("precioDescuento").value= Valor- descuento; }

      else if (Cantidad==4  && Marca == "ArgentinaLuz" || Marca == "FelipeLamparas" )  
     { descuento= Valor * 25 /100     
       document.getElementById("precioDescuento").value= Valor- descuento;  }
     
       else if  ( Cantidad==4 && Marca == "Osram" || Marca == "HazIluminacion" || Marca =="JeLuz" ) 
       { descuento = Valor *20 /100 
         document.getElementById("precioDescuento").value= Valor- descuento;  }

         else if ( Cantidad==3 && Marca== "ArgentinaLuz") 
          { descuento= Valor* 15/100
            document.getElementById("precioDescuento").value= Valor- descuento;  }
            
             if (Cantidad==3 && Marca== "FelipeLamparas")
            { descuento= Valor* 10 /100
             document.getElementById("precioDescuento").value= Valor- descuento; }

             else if (Cantidad== 3 && Marca == "Osram" || Marca == "HazIluminacion" || Marca == "JeLuz" )
             { descuento= Valor* 5 /100
                document.getElementById("precioDescuento").value= Valor- descuento;   }
                if ( Valor- descuento > 120 )
                { impuesto= (Valor- descuento) * 10 /100
                  document.getElementById("precioDescuento").value= (Valor- descuento)+ impuesto;
                  alert (" Usted pago "  +   ( Valor-descuento )  + " siendo %10 el impuesto, total de " + impuesto ) ;
                    }

}
