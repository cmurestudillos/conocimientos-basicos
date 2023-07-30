// Sueldo Mensual de un trabajador y precio de la hora extra
#include <iostream>
using namespace std;

int main()
{
	int hora, extra, sueldo;

	cout << "Horas Trabajadas: ";
	cin >> hora;
	
	cout << "Precio hora extra: ";
	cin >> extra;

	if(hora <= 160)
		cout << "\nSalario = 1000";
	else
	{
		sueldo = ((hora-160)*extra) + 1000;
		//cout << "\nEl salario es " << sueldo << " euros";
		cout << "\nSueldo base 1000 euros + " << (hora-160)*extra << " euros de horas extra= " << sueldo << " euros";
	}

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

}