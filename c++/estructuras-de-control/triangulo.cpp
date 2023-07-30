//Triangulo.Bucle For.
#include <iostream>
#include "stdlib.h"
using namespace std;

int main()
{
	int i;
	int j;
	int lado;
	int contador=1;
	int opcion;
	int espacio;
	int asterisco;

	cout << "\n****************************"    ;
	cout << "\n* Triangulo de Asteriscos  *"    ;
	cout << "\n****************************"    ;

	cout << "\n\n";
	cout << "Tipos de Triangulos: ";
	cout << "  	\n*   ";      
	cout << " 1 \n**  ";
	cout << "   \n*** ";
	cout << "\n";
	cout << "   \n*** ";
	cout << " 2 \n**  ";
	cout << "   \n*   ";
	cout << "\n";
	cout << "   \n  *  ";
	cout << " 3 \n **  ";
	cout << "   \n***  ";
	cout << "\n\n";

	cout << "Opcion: ";
	cin >> opcion;

	system("cls");//Limpiado de pantalla. 

	cout << "\n";
	cout << "\nLado del Triangulo: ";
	cin >> lado;
	cout << "\n";

//-------------------------------------------------------	

	switch(opcion)
	{
		case 1:
//Triangulo Normal.

	for(i=1; i<=lado; i++)
		{
			for(j=1; j<=contador; j++)
				{
				cout << " * ";
				}
			contador++;
			cout << "\n";
		}
		break;

	/*cout << "\n* ";
	cout << " \n** ";
	cout << " \n*** ";
	cout << " \n**** ";
	cout << " \n***** ";
	cout << " \n****** ";
	cout << " \n******* ";
	cout << " \n******** ";
	cout << " \n********* ";
	cout << " \n********** ";
	cout << " \n*********** ";
	cout << " \n************ ";*/

//-------------------------------------------------------

//Triangulo Inverso.

		case 2:

	for(i=lado; i>=1; i--)
		{
			for(j=1; j<=i; j++)
				{
				cout << " * ";
				}
		cout << "\n";
		}
		break;

	/*cout << "\n************ ";
	cout << " \n*********** ";
	cout << " \n********** ";
	cout << " \n********* ";
	cout << " \n******** ";
	cout << " \n******* ";
	cout << " \n****** ";
	cout << " \n***** ";
	cout << " \n**** ";
	cout << " \n*** ";
	cout << " \n** ";
	cout << " \n* ";*/

//-------------------------------------------------------
		
//Triangulo Inverso con espacios.

		case 3:

	espacio=lado-1;
	asterisco=1;
	for(i=1; i<=lado; i++)
		{
			for(j=1; j<=espacio; j++)
						cout << "  ";
			for(j=1; j<=asterisco; j++)
						cout << " * ";
			espacio--;
			asterisco++;
			cout << "\n";
		}
		break;

		default:
			cout << "Opcion no valida. ";
	}

	/*cout << " \n         *";
	cout << " \n          **";
	cout << " \n         ***";
	cout << " \n        ****";
	cout << " \n       *****";
	cout << " \n      ******";
	cout << " \n     *******";
	cout << " \n    ********";
	cout << " \n   *********";
	cout << " \n  **********";
	cout << " \n ***********";
	cout << " \n************";*/


	cout << "\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                        \1\1\1  Fin del Programa.  \1\1\1                        "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n";

}