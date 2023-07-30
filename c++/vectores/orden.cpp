//Orden de vectores
#include <iostream>
#include "stdlib.h"
#include "time.h"

using namespace std;
#define TAM 20

//Prototipos de funcion.
int main(){

	int i; 
	int	numeros[TAM];
	int j;
	int auxiliar;

	srand(time(NULL));

	cout << "\n";
	cout << "\t\tNUMEROS ALEATORIOS\n";
	cout << "\t\t------------------\n\n";

	for(i=0; i<TAM; i++)
		{		
		numeros[i]=rand()%101;
		}	
		
		cout << "\t\t\311\315\315\315\315\315\315\315\315\315\315\315\315\315\315\315\315\273 \n";
		cout << "\t\t\272Vector Original \272 \n";
		cout << "\t\t\310\315\315\315\315\315\315\315\315\315\315\315\315\315\315\315\315\274 \n\n";

	for(i=0; i<TAM; i++)
		{
		cout << " " << numeros[i];
		}

	cout << "\n\n\t\t\311\315\315\315\315\315\315\315\315\315\315\315\315\315\315\315\315\273 \n";
	cout << "\t\t\272Vector Ordenado \272 \n";
	cout << "\t\t\310\315\315\315\315\315\315\315\315\315\315\315\315\315\315\315\315\274 \n\n";

	for(i=0; i<TAM; i--)
		{
		for(j=0;j<TAM;j++)
			{
			if(numeros[j]>numeros[j+1])
				{
				auxiliar=numeros[j];
				numeros[j]=numeros[j+1];
				numeros[j+1]=auxiliar;
				}
			}
		cout << " " << numeros[i];
		}

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";
}
//Definiciones de funcion.
