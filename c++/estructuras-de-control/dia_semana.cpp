// Dias-Semana.Ejemplo de SWITCH.(condicional multiple)
#include <iostream>
using namespace std;

int main()
{

int dia;

	cout << "Introduce el numero de dia de la semana: ";
	cin >> dia;
	
	cout << "\n\n";

	switch (dia)
		{
		case 1:

			cout << "-Lunes-";
			break;

		case 2:
			cout << "-Martes-";
			break;

		case 3:
			cout << "-Miercoles-";
			break;

		case 4:
			cout << "-Jueves-";
			break;

		case 5:
			cout << "-Viernes-";
			break;

		case 6:
			cout << "-Sabado-";
			break;

		case 7:
			cout << "-Domingo-";
			break;

		default:
			cout << "-Error, solo hay 7 dias en la semana-";
		}


	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

}