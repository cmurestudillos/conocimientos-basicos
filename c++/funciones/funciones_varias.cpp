//Funciones Varias.
#include <iostream>
#include "stdlib.h"

using namespace std;

//Prototipos de funcion.
int esPrimo(int);
void dibujaRombo(int);
void entradaVip(int);

int main()
{ 
	int num;
	int diagonal;
	int edad;

	cout << "\t\t - COMPROBACION DE SI UN NUMERO ES PRIMO - \n";
	cout << "\t\t ----------------------------------------- \n\n";

	cout << "Escribe el Numero que quieres comprobar: ";
	cin >> num;
	cout << "\n";


	if (esPrimo(num) == 1)
		{
		cout << "- Es Primo - ";
		}
	else
		{
		cout << "- No es Primo - ";
		}

	cout << endl;
	system("pause>null");
	system("cls");

	cout << "\t\t - DIBUJO UN ROMBO - \n";
	cout << "\t\t ------------------- \n\n";

	cout << "Introduce la diagonal: ";
	cin >> diagonal;
	cout << "\n";

	dibujaRombo(diagonal);

	cout << endl;
	system("pause>null");
	system("cls");

	cout << "\t\t - LOCAL VIP - \n";
	cout << "\t\t ------------- \n\n";

	cout << "Edad: ";
	cin >> edad;
	cout << "\n";
	entradaVip(edad);






	cout << "\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                              \1\1\1  End Program.  \1\1\1                       "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n";
}

//Definiciones de funcion.
//--------------------------|||Numeros Primos|||1 si es primo, 0 no es primo---------------------------//
int esPrimo(int n)
			{
			int i;
			int resto;

			i=n-1;
			resto = n % i;

				while (i>1 && resto != 0)
						{
						i--;
						resto = n % i;
						}
	
				if(i == 1)
					{
					return 1;
					}
				else
					{
					return 0;
					}

			}
//--------------------------Dibujar Rombo---------------------------//
void dibujaRombo(int diag)
				{
				int esp;
				int ast;
				int i;
				int j;

				esp=diag/2;
				ast=1;

					for(i=1; i<=diag; i++)
						{
						cout << "\n\t\t";
						for(j=1; j<=esp; j++)
							cout <<"  ";
						for(j=1; j<=ast; j++)
							cout << "* ";

							if(i<=diag/2)
								{
								esp--;
								ast+=2;
								}
							else
								{
								esp++;
								ast-=2;				
								}
							}
						}
//--------------------------Local Vip---------------------------//
void entradaVip(int edad)
				{
				int saldo;

				if(edad>= 18 && saldo>=100)
					{
					cout << "Puedes pasar.";
					}
				else
					{
					cout << "Crece un poquito mas y trabaja!!!";
					}
				}
