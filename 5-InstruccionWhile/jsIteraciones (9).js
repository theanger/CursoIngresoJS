function mostrar()
{

	//var contador=0;
	// declarar variables
	
	//var respuesta='si';

	//while(respuesta!='no')
	
	var num;
	var maximo= parseInt(0);
	var minimo= parseInt(0);
	var respuesta= "si"
	
	do {        
		num= parseInt (prompt("ingrese un numero"));
		respuesta= prompt ("Desea seguir ingresando numeros?"); 
		
	  //while ( isNaN (num) ) {
		//num= parseInt(prompt("Error de validacion, ingrese un numero") );
	 
	 	
		if ( flag == 0 ) {  
		  minimo= num;
		  maximo=num;
		  flag = 1; }
		
		  if ( numero > maximo) { 
			 maximo= numero+ maximo;  }

			 if (numero < minimo)  {   
				 minimo= numero+ minimo;  }
				 
			 respuesta= prompt ("Desea seguir ingresando numeros?");
			 } while (respuesta=="si");
			 
		  



}//FIN DE LA FUNCIÓN