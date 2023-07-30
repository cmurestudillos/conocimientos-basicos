// Peaje.
#include <iostream>
using namespace std;

int main()
{

int opcion;
int peso;
double precio = 0;

	cout << "\n                                PEAJE                                       "    ;
	cout << "\n                        ====================                                "    ;
	cout << "\n		[1]" << " Motocicletas....(0.3 eur/Kg.) ";
	cout << "\n		[2]" << " Turismos........(0.5 eur/Kg.) ";
	cout << "\n		[3]" << " Autobuses.......(1.0 eur/Kg.) ";
	cout << "\n		[4]" << " Camiones........(1.2 eur/Kg.) ";
	cout << "\n\n";

	cout << "Indique el numero de Vehiculo: ";
	cin >> opcion;
	
	cout << "Indique el peso del Vehiculo: ";
	cin >> peso;

	switch (opcion)
		{
		case 1:
			precio=peso * 0.3;
			cout<< "\nTasa a Pagar: " << precio << " euros";
			break;

		case 2:
			precio=peso * 0.5;
			cout<< "\nTasa a Pagar: " << precio << " euros";
			break;

		case 3:
			precio=peso * 1;
			cout<< "\nTasa a Pagar: " << precio << " euros";
			break;

		case 4:
			precio=peso * 1.2;
			cout<< "\nTasa a Pagar: " << precio << " euros";
			break;

		case 5: case 6: case 7:
			cout << "No sabes el Vehiculo que conduces.";
			break;

		default:
			cout << "\nTasa a Pagar: " << precio << " euros" << "\nOpcion no Valida";
		}


/*if(opcion == 1)
		{
	precio=peso * 0.3;

	cout<< "\nTasa a Pagar: " << precio << "euros";
		}
		else if(opcion == 2)
			{
			precio=peso * 0.5;
			cout<< "\nTasa a Pagar: " << precio << "euros";
			}
		else if(opcion == 3)
			{
			precio=peso * 1;
			cout<< "\nTasa a Pagar: " << precio << "euros";
			}
		else if(opcion == 4)
			{
			precio=peso * 1.2;
			cout<< "\nTasa a Pagar: " << precio << "euros";
			}
else
		{
	cout << "\nTasa a Pagar: " << precio << " euros" << "\nOpcion no Valida";
		}*/

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

}