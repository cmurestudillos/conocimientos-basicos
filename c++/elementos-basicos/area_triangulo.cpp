//Programa que calcula el area de un triangulo
#include <iostream>

using namespace std;

	int main()
	{
			int base;
			int altura;
			int area;

			cout << "introduce la base: ";//recogemos el dato de la base
			cin >> base;//el dato se almacena en la variable

			cout << "introduce la altura: ";//recogemos el dato dela altura
			cin >> altura;//el dato se almacena en la variable

				area = base * altura / 2;//guardar el resultado en la variable area

			cout << "\nEl area es " << area;//muestra el valor que tiene la variable

			cout << "\n\n\n";
	}