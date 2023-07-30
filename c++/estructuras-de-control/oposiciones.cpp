// Oposiociones.Calcular notas.
#include <iostream>
using namespace std;

int main()
{

int preguntas;
int aciertos;
int fallos;
double resultado;
int blanco;

	cout << "Indique el numero de preguntas: ";
	cin >> preguntas;
	
	cout << "Indique el numero de aciertos: ";
	cin >> aciertos;

	cout << "Indique el numero de fallos: ";
	cin >> fallos;

	if (aciertos + fallos > preguntas)
		{
		cout << "\nDatos Incorrectos";
		}
	else
		{
		blanco = preguntas - aciertos - fallos;
		resultado = (aciertos - fallos - (blanco * 0.25))/preguntas * 100;

		cout << "\nLa nota final es de " << resultado << "%";
		}
			if ( resultado >= 70)
			{
				cout << "\n\n - El alumno es Apto - ";
			}
			else
			{
				cout << "\n\n - El alumno es No Apto - ";
			}


	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

}