// Gasolinera
#include <iostream>
using namespace std;

int main()
{

double litros;
double surtidor;
double precio;

	cout << "\n================================================================================ "    ;
	cout << "\n                                GASOLINERA                                       "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n		Elige el tipo de combustible ";
	cout << "\n		---------------------------- ";
	cout << "\n		[1]" << " Gasolina S/P 95....(1.34 eur/l) ";
	cout << "\n		[2]" << " Gasolina S/P 98....(1.48 eur/l) ";
	cout << "\n		[3]" << " Diesel.............(1.23 eur/l) ";
	cout << "\n		[4]" << " Diesel E +.........(1.26 eur/l) ";
	cout << "\n\n\n";

	cout << "Indique el numero de surtidor de Gasolina: ";
	cin >> surtidor;
	
	cout << "Indique el numero de litros: ";
	cin >> litros;

if(surtidor == 1)
		{
	precio=litros * 1.34;

	cout << "\nHa elegido usted Gasolina S/P 95 ";
	cout<< "\nPrecio: " << precio << "euros";
		}
		else if(surtidor == 2)
			{
			precio=litros * 1.48;

			cout << "\nHa elegido usted Gasolina S/P 98 ";
			cout<< "\nPrecio: " << precio << "euros";
			}
		else if(surtidor == 3)
			{
			precio=litros * 1.23;

			cout << "\nHa elegido usted Diesel ";
			cout<< "\nPrecio: " << precio << "euros";
			}
		else if(surtidor == 4)
			{
			precio=litros * 1.26;

			cout << "\nHa elegido usted Diesel E+ ";
			cout<< "\nPrecio: " << precio << "euros";
			}
else
		{
	cout << "\n\n Opcion no valida.";
		}

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

}
