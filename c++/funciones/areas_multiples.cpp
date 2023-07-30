//Areas Multiples.
#include <iostream>
#include "stdlib.h"

using namespace std;

#define PI 3.1416//Variable visible para todo el programa.

//Prototipos de funcion.
int areaRectangulo (int, int);
int areaTriangulo (int,int);
int areaCirculo (double);
int areaCircunferencia (double);

int main()
{ 

	int opcion;
	int base;
	int altura;
	double radio;
	double longitud;

	cout << "\n\n";
	cout << "\t\t - FIGURAS GEOMETRICAS - \n\n";
	cout << "\t\t1.- Rectangulo - \n";
	cout << "\t\t2.- Triangulo - \n";
	cout << "\t\t3.- Circulo - \n";
	cout << "\t\t4.- Circunferencia- \n";
	cout << "\n";

	cout << "\t\tOpcion: ";
	cin >> opcion;
	cout << "\n";

	if(opcion<1 || opcion>4)
		{
		cout << "Opcion Incorrecta " << endl;
		system("pause>null");
		system("cls");
		}


	switch(opcion)
		{
//----------------Rectangulo-------------------------------//
	case 1:
		areaRectangulo(base,altura);
		break;
//---------------Triangulo-------------------------------//
	case 2:
		areaTriangulo(base,altura);
		break;
//----------------------Circulo------------------------------//
	case 3:
		areaCirculo(radio);
		break;
//----------------------Circunferencia------------------------------//
	case 4:
		areaCircunferencia(radio);
		break;
	}

	cout << "\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                              \1\1\1  End Program.  \1\1\1                       "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n";
}

//Definiciones de funcion.
//--------------------------Rectangulo---------------------------//
int areaRectangulo(int base,int altura)
					{
					int areaR;

					cout << "Base: ";
					cin >> base;

					cout << "Altura: ";
					cin >> altura;

					areaR=base*altura;
					cout << "\n";
					cout << "El area del Rectangulo es: " << areaR;
					cout << "\n";
					return areaR;
					}
//--------------------------Triangulo---------------------------//
int areaTriangulo(int base, int altura)
				{
				int areaT;

				cout << "Base: ";
				cin >> base;

				cout << "Altura: ";
				cin >> altura;

				areaT=base*altura/2;
				cout << "\n";
				cout << "El area del Triangulo es: " << areaT;
					cout << "\n";
					return areaT;
				}
//--------------------------Circulo---------------------------//
int areaCirculo(double radio)
				{
				double areaC;

				cout << "Radio: ";
				cin >> radio;

				areaC = PI * radio * radio;
				cout << "\n";
				cout << "El area del Circulo es: " << areaC;
					cout << "\n";
					return areaC;
				}
//--------------------------Circunferencia---------------------------//
int areaCircunferencia(double radio)
				{
				double longitudCr;

				cout << "Radio: ";
				cin >> radio;

				longitudCr = 2 * PI * radio;
				cout << "\n";
				cout << "La Longitud del Circulo es: " << longitudCr;
					cout << "\n";
					return longitudCr;
				}