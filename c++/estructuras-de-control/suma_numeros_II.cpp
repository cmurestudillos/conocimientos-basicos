// Suma de numeros hasta que nos digan basta.
#include <iostream>
using namespace std;

int main()
{

int num;
int suma=0;
//int contador=1;
int contador=0;
char respuesta;
int media;

cout << "Quieres jugar?(s/n)";
cin >> respuesta;

	//Acumulador para el bucle while.
	/*while (respuesta != 'n')
	{

		cout << "\nIntroduce un numero: ";
		cin >> num;
		suma += num;//suma = suma + num;

		//contador ++;
	
		cout << "Quieres seguir sumando?(s/n)";
		cin >> respuesta;

	}*/


	//Acumulador para el bucle while.
	while (respuesta != 'n')
	{

		cout << "\nIntroduce un numero: ";
		cin >> num;
		suma += num;//suma = suma + num;

		contador ++;

		cout << "Quieres seguir sumando?(s/n)";
		cin >> respuesta;
		
	}
	if (contador > 0)
		{
			media=suma/contador;

cout << "\n\nLa suma es: " << suma;
cout << "\n\nLa media es: " << media;
		}

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

}
