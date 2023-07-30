// Calendario.
#include <iostream>
#include "stdlib.h"
#include "time.h"
#include "math.h"

using namespace std;

//Prototipos de funcion.
int esBisiesto;
int compruebaBisiesto(int year);
int diasMes(int);
int diaSemana(int,int,int);

int main()
{
	int year, mes, dias,dia;

	cout << "::: CALENDARIO :::\n\n";
	cout << "------------------\n\n";
	

	cout << "Año: ";
	cin >> year;
	cout << "Mes: ";
	cin >> mes;
	cout << "Dia: ";
	cin >> dia;

	esBisiesto = compruebaBisiesto(year);
	if(esBisiesto == 1)
		cout << "\nEl Año es bisiesto";
	else
		cout << "\nEl Año no es bisiesto";
	
	dias = diasMes(mes);
	cout << "El mes tiene " << dias << " dias";

	dia = diaSemana(dia,mes,year);

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

	}

//Definiciones de funcion.
//--------------------------Bisiesto---------------------------//
int compruebaBisiesto(int year)
{	
	if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
		return 1;
	else
		return 0;
}
//--------------------------Dias-Mes---------------------------//
int diasMes(int m)
{

	cout << "\n\n";
	switch(m)
	{
	case 1:
		cout << "        - ENERO - \n\n";
		return 31;
		break;
	case 2:
		cout << "        - FEBRERO - \n\n";
		if(esBisiesto==1)
			return 29;
		else
			return 28;
		break;
	case 3:
		cout << "        - MARZO - \n\n";
		return 31;
		break;
	case 4:
		cout << "        - ABRIL - \n\n";
		return 30;
		break;
	case 5:
		cout << "         - MAYO - \n\n";
		return 31;
		break;
	case 6:
		cout << "        - JUNIO - \n\n";
		return 30;
		break;
	case 7:
		cout << "        - JULIO - \n\n";
		return 31;
		break;
	case 8:
		cout << "        - AGOSTO - \n\n";
		return 31;
		break;
	case 9:
		cout << "      - SEPTIEMBRE - \n\n";
		return 30;
		break;
	case 10:
		cout << "        - OCTUBRE - \n\n";
		return 31;
		break;
	case 11:
		cout << "       - NOVIEMBRE - \n\n";
		return 30;
		break;
	case 12:
		cout << "       - DICIEMBRE - \n\n";
		return 31;
		break;
	default:
		return 0;
	}
}
//--------------------------Dias-Semana---------------------------//
int diaSemana(int dia,int mes, int year)
{

int x;
x=((year-1)%7+(((year-1/4-3)*(year-1/100+1))/4)%7+mes+dia%7)%7-1;

	cout << "\n";
	switch(x)
	{
	case 1:
		cout << "     \n - LUNES - \n\n";
		//return 1;
		break;
	case 2:
		cout << "     \n - MARTES - \n\n";
		//return 2;
		break;
	case 3:
		cout << "     \n - MIERCOLES - \n\n";
		//return 3;
		break;
	case 4:
		cout << "     \n - JUEVES - \n\n";
		//return 4;
		break;
	case 5:
		cout << "     \n - VIERNES - \n\n";
		//return 5;
		break;
	case 6:
		cout << "     \n - SABADO - \n\n";
		//return 6;
		break;
	case 7:
		cout << "     \n - DOMINGO - \n\n";
		//return 7;
		break;
	default:
		return 0;
	}
}