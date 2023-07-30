//Numeros Aleatorios Hora-Fecha.
#include <iostream>
#include "stdlib.h"
#include "time.h"
#include "math.h"
using namespace std;

int main()
{
	int i;
	int cifras=0;
	int resto;
	int aleatorio;
	int contador=1;
	int horas;
	int minutos;
	int segundos;
	int dias;

	srand(time(NULL));

	for(i=0; i<=6; i++)
	{ 
		aleatorio = rand()%10;
		cifras = cifras*10+aleatorio;	
	}

	cout << "Numero: " << cifras;
	cout << "\n\n";

		do
			{
				resto=cifras%100;
				cifras=cifras/100;

				if(contador==1)
					segundos=resto%60;
				else if(contador==2)
					minutos=resto%60;
				else if(contador==3)
					horas=resto%24;
				else if(contador==4)
					dias=resto%7;

				contador++;

			}while(cifras>0);

cout << "\t";

	if (dias<10)
		{	
		cout << "0";
		}
			if(dias>1)
				{
				cout << dias << " Dias " << " ";
				}
			else
				{
				cout << dias << " Dia " << " ";
				}
	
	if (horas<10)
		{	
		cout << "0";
		}
			if(horas>1)
				{
				cout << horas << " Horas " << " ";
				}
			else
				{
				cout << horas << " Hora " << " ";
				}

	if (minutos<10)
		{	
		cout << "0";
		}
			if(minutos>1)
				{
				cout << minutos << " Minutos " << " ";
				}
			else
				{
				cout << minutos << " Minuto " << " ";
				}

	if (segundos<10)
		{	
		cout << "0";
		}
				if(segundos>1)
				{
				cout << segundos << " Segundos ";
				}
			else
				{
				cout << segundos << " Segundo ";
				}

	cout << "\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                              \1\1\1  End Program.  \1\1\1                       "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n";

}
