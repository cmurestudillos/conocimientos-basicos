// Ejemplos de Matrices.
#include <iostream>
#include "stdlib.h"
#include "time.h"

using namespace std;
#define TAM 6

int main()
{
	int tabla[TAM][TAM];
	int i;
	int j;

	srand(time(NULL));

	//Rellenar la matriz con numeros aleatorios.(0-9)
			for(i=0; i<TAM; i++)
				{	
				for(j=0; j < TAM; j++)
					{
                      tabla[i][j]=rand()%10; 
					}
				}
			//Mostrar la matriz.
			cout << "\n\n";
			cout << "\tMATRIZ" << " " << TAM << "X" << TAM << "\n";
			cout << "\t-----------\n\n";
			cout << "\n";
			for(i=0; i<TAM; i++)
				{	
				for(j=0; j < TAM; j++)
					{ 
					cout << " " << tabla[i][j] << " "; 
					}
				cout << "\n";
				}

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";
}
