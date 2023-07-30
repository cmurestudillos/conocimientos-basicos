//Menu de varias Operaciones..
#include <iostream>
#include "stdlib.h"
using namespace std;

int main()
{
	int opcion;
	int es_primo=1;
	int num1;
	int num2;
	int operacion=0;
	int potencia;
	int i;
	int j;
	int resto;
	int esp;
	int ast;
	int diagonal;

	do
	{
	cout << "\n\n";
	cout << "\t\t - CALCULADORA - \n\n";
	cout << "\t\t1.- Producto de 2 Numeros - \n";
	cout << "\t\t2.- Potencias de 2 Numeros - \n";
	cout << "\t\t3.- Numero al Reves - \n";
	cout << "\t\t4.- Primos con Divisores- \n";
	cout << "\t\t5.- Dibujar un Rombo- \n";
	cout << "\n\n";
	cout << "\t\t0.- Salir- \n\n";

	cout << "\t\tOpcion: ";
	cin >> opcion;
	cout << "\n";

	switch(opcion)
		{
	case 0:
		break;
//----------------Producto de 2 Numeros-------------------------------//
	case 1:
		cout << "Introduce el 1 Numero: ";
		cin >> num1;
		cout << "Introduce el 2 Numero: ";
		cin >> num2;

		operacion=0;
		for(i=1; i<=num2; i++)
			{
		operacion=operacion + num1;
			}
		cout << "El resultado es: " << operacion;
		break;
//---------------Potencias de 2 Numeros-------------------------------//
	case 2:
		cout << "Base: ";
		cin >> num1;
		cout << "Exponente: ";
		cin >> num2;

		potencia=1;
		for(i=1; i<=num2; i++)
			{
		potencia*=num1;
			}
		cout << "Potencia: " << potencia;
		break;
//----------------------Numero al Reves------------------------------//
	case 3:
		cout << "Numero 1: ";
		cin >> num1;

		while(num1>=1)
			{
				resto=num1%10;
				operacion=(operacion*10)+resto;
				num1=num1/10;
			}
		cout << "El Numero es: " << operacion;

		break;
//----------------Primos con Divisores-------------------------------//
	case 4:
		cout << "Introduzca un numero: ";
		cin >> num1;
			
		i=num1-1;
		resto = num1 % i;
		cout << "Divisores: ";
		while (i>1)
			{
			resto = num1 % i;
			if(resto==0)
				{
				cout << i << " - ";
				es_primo=0;
				}
			i--;
			}

		if(es_primo == 1)
			{
			cout<<"\n\n-- Es Numero Primo --";
			}
		else
			{
			cout << "\n\n-- No es Numero Primo --";
			}
		break;
//-----------------Dibujar un Rombo--------------------------------//
	case 5:

			cout << "\nDiagonal (numero impar, por favor): ";
			cin >> diagonal;

			cout << "\n\n";
			
			esp=diagonal/2;
			ast=1;
			for(i=1; i<=diagonal; i++){
				cout << "\n\t\t";
				for(j=1; j<=esp; j++)
					cout <<"  ";
				for(j=1; j<=ast; j++)
					cout << "* ";
				if(i<=diagonal/2){
					esp--;
					ast+=2;
				}
				else{
					esp++;
					ast-=2;				
				}
			}
		break;
	default:
		cout << "\nOpcion Incorrecta.";
		}
	if(opcion!=0)
		{
	cout << endl;//limpia el buffer de salida.
	system("pause>null");//pausa del programa.				
	system("cls");//limpiado de pantalla.
		}
	}while(opcion!=0);

	cout << "\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                              \1\1\1  End Program.  \1\1\1                       "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n";

}