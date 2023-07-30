//Filas y Columnas en una matriz.
#include <iostream>
#include "stdlib.h"
#include "time.h"

using namespace std;

int main()
{
	int matriz[6][6];
	int fila, col, n, elem, i;
	char f_c;

	srand(time(NULL));

	cout <<   "\tMATRIZ";
	cout << "\n\t------\n\n";

	for(fila=0;fila<6;fila++){
		for(col=0;col<6;col++){
			n=rand()%10;
			matriz[fila][col]=n;
			cout << "  "<< matriz[fila][col] ;
		}
		cout << " \n";
	}

	cout << "\nQuieres mostrar fila(c) o columna(f): ";
	cin >> f_c;
	
	cout << "\nQue elemento quieres mostrar?: ";
	cin >> elem;

	cout << "\n";
	
	for(i=0;i<6;i++)
		if(f_c=='f')
			cout << " " << matriz[elem][i] << " ";
		else
			cout << "\n " << matriz[i][elem];
	
	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";
}