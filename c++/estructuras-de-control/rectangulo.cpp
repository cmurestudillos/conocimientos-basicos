//Rectangulo.Bucle For.
#include <iostream>
using namespace std;

int main()
{
	int i;
	int j;
	int base;
	int altura;

	cout << "\n****************************"    ;
	cout << "\n* Rectangulo de Asteriscos *"    ;
	cout << "\n****************************"    ;

	cout << "\n";
	cout << "\nBase: ";
	cin >> base;
	cout << "\nAltura: ";
	cin >> altura;
	cout << "\n";

	for(i=1; i<=altura; i++)
		{
			for(j=1; j<=base; j++)
				{
				cout << " * ";
				}
			cout << "\n";
		}

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                        \1\1\1  Fin del Programa.  \1\1\1                        "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

}