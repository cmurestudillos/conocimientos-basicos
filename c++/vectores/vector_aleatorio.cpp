//Vector de 30 numeros aleatorios
#include <iostream>
#include "stdlib.h"
#include "time.h"

using namespace std;
#define TAM 30

int multiplo7(int);

int main(){

	int i, numeros[TAM], cont_50=0, cont_7=0;

	srand(time(NULL));

	cout << TAM << " ALEATORIOS\n";
	cout << "-------------\n\n";

	//Relleno el vector el vector
	for(i=0; i<TAM; i++){		
		numeros[i]=1+rand()%100;
	}	

	//Muestro el vector y realizo los calculos
	for(i=0; i<TAM; i++){	
		cout << "\nPosicion [" << i << "] = " << numeros[i];

		if(numeros[i] > 50)//Si es mayor de 50, lo cuento
			cont_50++;
		if( multiplo7(numeros[i]) )
			cont_7++;
	}

	//Muestro cuantos numeros hay mayores que 50
	cout << "\n\nNumeros mayores de 50: " << cont_50;
	cout << "\n\nNumeros multiplos de 7: " << cont_7;

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";
}

int multiplo7(int n){

	int es_multiplo=0;

	if(n%7 == 0)
		es_multiplo=1;

	return es_multiplo;

}