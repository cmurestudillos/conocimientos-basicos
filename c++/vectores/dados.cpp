// Tirada de dados
#include <iostream>
#include "stdlib.h"
#include "time.h"

using namespace std;
#define TAM 11
#define veces 1000

//Prototipos de funcion.
int tirada();

int main(){

	int i;
	int n;
	int v[TAM];


	srand(time(NULL));

		cout << "\t\t------------------------- \n";
		cout << "\t\t   PORCENTAJE DE DADOS    \n";
		cout << "\t\t------------------------- \n";


			for(i=0; i<TAM; i++)
				{
				v[i]=0;
				}

			for(i=0; i<veces; i++)
				{
				n=tirada();
				v[n-2]++;
				}

			for(i=0; i<TAM; i++)
				{
				cout << "Numero " << i+2 << ":";
				cout << " "<< v[i] * 100 / veces << " %";
				cout << "\n";
				}

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";
}
//Definiciones de funcion.
//--------------------------Funcion Tirada---------------------------//
int tirada()
		{
		int d1;
		int d2;
		int suma;

		d1=1+rand()%6;
		d2=1+rand()%6;

		suma=d1+d2;
		
		return suma;
}