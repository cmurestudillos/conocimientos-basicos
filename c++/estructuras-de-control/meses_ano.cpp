// Dias-Semana.Ejemplo de SWITCH.(condicional multiple)
#include <iostream>
using namespace std;

int main()
{

int month;

	cout << "Introduce el numero de Mes: ";
	cin >> month;
	
	cout << "\n\n";

	switch (month)
		{
		case 1:

			cout << "-Enero-";
			break;

		case 2:
			cout << "-Febrero-";
			break;

		case 3:
			cout << "-Marzo-";
			break;

		case 4:
			cout << "-Abril-";
			break;

		case 5:
			cout << "-Mayo-";
			break;

		case 6:
			cout << "-Junio-";
			break;

		case 7:
			cout << "-Julio-";
			break;

		case 8:
			cout << "-Agosto-";
			break;

		case 9:
			cout << "-Septiembre-";
			break;

		case 10:
			cout << "-Octubre-";
			break;

		case 11:
			cout << "-Noviembre-";
			break;

		case 12:
			cout << "-Diciembre-";
			break;

		case 13: case 14: case 15:
			cout << "-Eso no es ningun mes, eso es mas de One Year-";
			break;

		default:
			cout << "-Error, solo hay 12 Meses en One Year-";
		}


	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

}