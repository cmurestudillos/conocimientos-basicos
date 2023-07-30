//Estudio de temperaturas
#include <iostream>
#include "stdlib.h"
#include "time.h"

using namespace std;
#define TAM 6

int main()
{
	int matriz[TAM][TAM]={0}; //Inicializa toda la matriz a 0
	int i, j, n;

	srand(time(NULL));

	cout <<   "\t  MATRIZ";
	cout << "\n\t  ------\n\n";

	//Relleno la matriz y la voy mostrando
	for(i=0;i<TAM;i++)	{
		for(j=0;j<TAM;j++)		{
			n=rand()%10;
			matriz[i][j]=n;
			cout << "   "<< matriz[i][j] ;
		}
		cout << "  \n\n";
	}


	cout << "\n    DIAGONAL PRINCIPAL";
	cout << "\n    -------- ---------\n\n";

	for(i=0;i<TAM;i++)	{
		for(j=0;j<TAM;j++){
			if(i == j)
				cout << "   "<< matriz[i][j] ;
			else
				cout << "   -";
		}
		cout << "  \n\n";
	}

	cout << "\n    DIAGONAL SECUNDARIA";
	cout << "\n    -------- ----------\n\n";

	for(i=0;i<TAM;i++)	{
		for(j=0;j<TAM;j++)		{
			if(i+j == TAM-1)
				cout << "   "<< matriz[i][j] ;
			else
				cout << "   -";
		}
		cout << "  \n\n";
	}


	cout << "\n       EL ELEGIDO";
	cout << "\n       -- -------\n\n";

	cout << "Que numero quieres mostrar?: ";
	cin >> n;
	cout << "\n\n";

	for(i=0;i<TAM;i++)	{
		for(j=0;j<TAM;j++)		{
			if(matriz[i][j]==n)
				cout << "   "<< matriz[i][j] ;
			else
				cout << "   -";
		}
		cout << "  \n\n";
	}


	cout << "\n       EL OCULTO";
	cout << "\n       -- -------\n\n";

	cout << "Que numero NO quieres mostrar?: ";
	cin >> n;
	cout << "\n\n";

	for(i=0;i<TAM;i++)	{
		for(j=0;j<TAM;j++)		{
			if(matriz[i][j]!=n)
				cout << "   "<< matriz[i][j] ;
			else
				cout << "   -";
		}
		cout << "  \n\n";
	}

}