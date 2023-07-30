//Extructuras de control.Condicional "if" (Calificacion de Nota)
#include <iostream>
using namespace std;

	int main()
	{

	int n;
		cout << "Escribe tu Nota: ";
		cin >> n;

	if (n>=5)
	{
		cout << "\n\nEstas Aprobado.";
	}

	if (n<=4)
	{
		cout << "\n\nEstas Suspenso.";
	}

	cout << "\n\n";
	cout << "\n\nFin del Programa.";

	cout << "\n\n\n";

	}