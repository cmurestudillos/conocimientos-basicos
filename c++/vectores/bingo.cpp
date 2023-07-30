// Bingo.
#include <iostream>
#include "stdlib.h"
#include "time.h"

using namespace std;
#define TAM 100

//Prototipos de funcion.
int main()
{

	int i;
	int j;
	int n;
	int v[TAM];
	int auxiliar;
	int linea;
	int bingo;
	char respuesta;


	srand(time(NULL));

		do
			{
		cout << "\t\t\t\t\311\315\315\315\315\315\315\315\315\315\315\315\315\315\273\n";
		cout << "\t\t\t\t\272    BINGO    \272   \n";
		cout << "\t\t\t\t\310\315\315\315\315\315\315\315\315\315\315\315\315\315\274\n";

			cout << endl;
			cout << "\t\t...El Bombo esta girando, !!!Preparate!!!... ";
			system("pause>null");
			cout << endl;
			system("pause>null");

			do
				{
				linea=1+rand()%TAM;
				}while(linea<5 || linea>=97);

			do	
				{
				bingo=1+rand()%TAM;
				}while(bingo<linea || linea<15);

			for(i=1; i<TAM; i++)
				{	
				n = 1 + rand()%99;
				if(i>0)
					{
					for(j=0; j < i; j++)
						if(n==v[j])
							{
							n = 1 + rand()%99;
							j=-1;                         
							}
					v[i]=n;
					}	
				cout << "\nNumero: " << n;
				cout << endl;
				system("pause>null");
				}
			cout << "\n";
			cout << "Fin de la Partida.";
			cout << "\n";
			cout << "Quieres volver a jugar???(s/n)";
			cin >> respuesta;
			system("cls");

			}while(respuesta=='s');

			cout << "\n\n";
			cout << "\t\t\t\tGracias por Jugar. \n";
			cout << "\t\t\t\t------------------\n\n";

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";
}
//Definiciones de funcion.
//------------------------------------------------------------------//
