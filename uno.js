
/*
Enunciado:
Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
-nombre (entre 3 y 10 caracteres)
-edad ( mayor o igual a 12)
-vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
-dosis (“p” en caso de ser la primer dosis o “s” en caso de ser la segunda dosis)
-sexo( “f” o “m” )
Informar:
a- Promedio de edad de los que se vacunaron con la rusa
b- Nombre y vacuna de la mujer con más edad
c- De las personas que recibieron la vacuna americana que porcentaje son mayores de edad
d- Porcentaje de los que están vacunados con 2 dosis sobre el total de vacunados
e- Vacuna menos inoculada
*/

function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let seguir;
	// punto a
	let promEdadRusa= 0;
	let acumEdadRusa = 0;
	let contRusa = 0;
	//punto b
	let edadMujerMayor;
	let nombreMujerMayor;
	let vacunaMujerMayor;
	let flagMujer =	1;
	//punto c
	let porcAmericanaMayor = 0;
	let contAmericanaMayor = 0;
	let contAmericana = 0;
	// punto d
	let ContDosDosis = 0;
	let contadorVacunados = 0;
	let porcDosDosis ;
	//punto e
	let contChina = 0;
	let menosInoculada;
	let contMenosInoculada;

	do{
		nombre=prompt("Ingrese nombre:");
		while(!(nombre.length >= 3 && nombre.length <=10)){
			nombre=prompt("Nombre fuera de rango.Reingrese nombre:");

		}
		edad = parseInt(prompt("Ingrese edad:"));
		while(!(edad>=12) ){                  // !(edad>=12)
			edad = parseInt(prompt("Edad invalida. Reingrese edad:"));
			
		}
		if(edad<18){
			vacuna=prompt("ingrese vacuna(americana):");
			while(vacuna!="americana"){
				vacuna=prompt("Error,reingrese vacuna(americana):");
			}
		}else{

		
		vacuna= prompt("ingrese vacuna (rusa/china/americana):");
		while( vacuna != "rusa" && vacuna!= "china" && vacuna !="americana"){ // !(vacuna == "rusa" || vacuna== "china" || vacuna =="americana"))
			vacuna=prompt("Error.Reingrese vacuna (rusa/china/americana):");
		}
	}
		dosis= prompt("ingrese dosis (p/s):");
		while( !(dosis=="s" || dosis=="p")){ 
			dosis=prompt("Error.Reingrese  dosis (p/s):");
		}
		sexo= prompt("ingrese sexo (f/m):");
		while( !(sexo=="f" || sexo=="m")){ 
			sexo=prompt("Error.Reingrese sexo (f/m):");
		}

		switch(vacuna){
			case"rusa":
			contRusa++;
			acumEdadRusa += edad;
			break;

			case"china":
				contChina++;
			break;
			case"americana":
			contAmericana++;
			if(edad>=18){
				contAmericanaMayor++;
			}
			break;
			
		}
		
			
		if(sexo == "f"){
			if(flagMujer || edad > edadMujerMayor){
				edadMujerMayor= edad;
				nombreMujerMayor = nombre;
				vacunaMujerMayor  =vacuna;
				flagMujer=0;
			}

		}

		if(dosis == "s"){
			ContDosDosis++;
		}
		contadorVacunados++;
		

		seguir=prompt("Quieres ingresar otro paciente?:");
	}while(seguir=='s');
	///////////////////////////////////////////////////////////

	if(contChina < contRusa && contChina < contAmericana){
		menosInoculada = "china";
		contMenosInoculada = contChina;
	}
	else if(contRusa <= contChina && contRusa < contAmericana){
		menosInoculada="rusa";
		contMenosInoculada = contRusa;
	}else{
		menosInoculada = "Americana";
		contMenosInoculada = contAmericana;
	}

	if(contAmericana !=0){ //para evitar dividir por 0 hay que usar este metodo para evitarlo.

		porcAmericanaMayor = contAmericanaMayor*100/contAmericana;
	}
	
		porcDosDosis = ContDosDosis * 100 /contadorVacunados;
	

	if(contRusa !=0){
		promEdadRusa=acumEdadRusa/contRusa;
	}

	document.write("El promedio de edad de los vacunados con rusa es "+promEdadRusa+"<br>");
	if(flagMujer){
		document.write("b- No se ingresaron pacientes femeninos <br>")
	}else{
		document.write("b- la mayor paciente tiene " +edadMujerMayor+ " años , se llama " +nombreMujerMayor+ " y le dieron la vacuna "
		+ vacunaMujerMayor + "<br");
	}
	document.write("c-porcentaje de mayores vacunados con la americana " +porcAmericanaMayor + "<br>");
	document.write("d- porcentaje de vacunados con dos dosis "+ porcDosDosis + "<br>");
	document.write("e-La cantidad menos inoculada es  " + menosInoculada + "con " +contMenosInoculada+ "aplicaciones <br>");

}
 

