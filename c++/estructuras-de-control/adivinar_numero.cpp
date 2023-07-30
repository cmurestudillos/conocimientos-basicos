//Adivinar Numero Aleatorio.
#include <iostream>
#include "stdlib.h"
#include "time.h"
using namespace std;

int main()
{
	int n;
	int i=10;
	int numero=71;

srand(time(NULL));

	cout << "Introduzca un numero del 1 al 100 y Adivinalo: ";
	cin >> n;
	i--;

	while (n != numero && i > 0)
			{

			if(n<numero)
				{
				cout<<"\nEl numero es Mayor que " << n;
				}
			else
				{
				cout << "\nEl numero es Menor que " << n;
				}

		cout << "\n-- Fallaste --";
		cout << "\n\n";
		cout << "\nIntentalo de Nuevo: ";
		cin >> n;
		i--;
			}
	
	if(n!=numero)
		cout<<"\n\n-- Has agotado los 10 intentos.--";
	else
		cout << "\n\n-- Premio. Un Perrito Piloto --";

	cout << "\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                              \1\1\1  End Program.  \1\1\1                       "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n";

}
