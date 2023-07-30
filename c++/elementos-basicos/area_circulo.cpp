//Programa que calcula el area de un triangulo
#include <iostream>

using namespace std;
#define PI 3.1416

	int main()
	{
			double radio;
			double longitud;
			double area;
			//float radio, longitud, area;

			cout << "introduce el radio: ";//recogemos el dato de la base
			cin >> radio;//el dato se almacena en la variable

			cout << "introduce la longitud: ";//recogemos el dato dela altura
			cin >> longitud;//el dato se almacena en la variable

				area = PI * radio * radio;//guardar el resultado en la variable area
				longitud = 2 * PI * radio;//guardar el resultado en la variable longitud

			cout << "\nEl area es " << area;//muestra el valor que tiene la variable
			cout << "\nLa longitud es " << longitud;//muestra el valor que tiene la variable

			cout << "\n\n\n";
	}