// Calculadora.
#include <iostream>
using namespace std;

int main()
{

int num1;
int num2;
int opcion;
int valida = 1;
double resultado;

	cout << "Operador 1: ";
	cin >> num1;
	
	cout << "Operador 2: ";
	cin >> num2;

	cout << "\nOpciones de Calculadora ";
	cout << "\n\n";
	cout << "\n[1]" << " A + B ";
	cout << "\n[2]" << " A - B ";
	cout << "\n[3]" << " A x B ";
	cout << "\n[4]" << " A / B ";
	cout << "\n[5]" << " A % B ";
	cout << "\n\n";

	cout << "Operacion elegida: ";
	cin >> opcion;

	switch (opcion)
		{
		case 1:
			resultado=num1 + num2;
			cout<< "\nResultado: " << resultado;
			break;

		case 2:
			resultado=num1 - num2;
			cout<< "\nResultado: " << resultado;
			break;

		case 3:
			resultado=num1 * num2;
			cout<< "\nResultado: " << resultado;
			break;

		case 4:
			resultado=double(num1) / double(num2);
			cout<< "\nResultado: " << resultado;
			break;

		case 5:
			resultado=num1 % num2;
			cout<< "\nResultado: " << resultado;
			break;

		default:
			cout << "\nEsta operacion no existe ";
			valida = 0;
		}

	if (valida)
		{
		cout<< "\nResultado: " << resultado;
		}
	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

}