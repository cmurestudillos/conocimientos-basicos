//Sumar las cifras de un numero con el bucle Do-While
#include <iostream>
using namespace std;

int main()
{
	int num;
	int resto;
	float suma=0;

	cout << "Introduce una cifra: ";
	cin >> num;

		do
			{
				resto=num%10;
				suma += resto;
				num=num/10;
			}
		while(num>0);

	cout << "\n\n";
	cout << "La suma de los 5 numeros es: " << suma;

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                        \1\1\1  Fin del Programa.  \1\1\1                        "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

}