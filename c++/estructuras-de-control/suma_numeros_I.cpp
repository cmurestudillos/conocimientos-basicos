// Suma 5 numeros con un bucle.
#include <iostream>
using namespace std;

int main()
{

int num;
int suma=0;
int contador=0;

	//Acumulador para el bucle while.
	while (contador < 5)
	{

		cout << "\nIntroduce un numero: ";
		cin >> num;
		suma += num;//suma = suma + num;

		contador ++;
	}

cout << "\n\nLa suma es : " << suma;

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

}