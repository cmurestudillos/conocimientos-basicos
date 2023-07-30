//Calendario del mes
#include <iostream>
using namespace std;

int esBisiesto;

void calendario(int, int);
int moduloMes(int);
void compruebaBisiesto(int);
int diasMes(int);

int main(){
	int mes, anio;

	cout << "    ::: CALENDARIO :::\n\n";
	cout << " Mes: ";
	cin >> mes;
	cout << "Año: ";
	cin >> anio;

	compruebaBisiesto(anio);
	calendario(mes, anio);
}

//Funcion que dibuja el mes de un a�o
void calendario(int m, int a){

	int n, mod, dias;
	int i, cont;

	mod = moduloMes(m);
	n = ((a-1)%7 + ((a-1)/4-3*(((a-1)/100+1)/4))%7 + mod + 1%7)%7;
	if(n==0)
		n=7;
 	//cout << n;
	cout << "\n\n";
	
	dias = diasMes(m);

	cout << " L   M   X   J   V   S   D\n";
	cout << "--------------------------\n\n";

	for(i=1; i<n; i++)
		cout << "    ";

	cont=n;
	for(i=1; i<=dias; i++){
		if(cont>7){
			cout << "\n\n";
			cont=1;
		}
		if(i<10)
			cout << " ";
		cout << i << "  ";
		cont++;
	}

	cout << "\n\n\n";
}

//Funcion que devuelve el modulo de un mes
int moduloMes(int mes){
	switch(mes){
	case 1:
		return 0;
		break;
	case 2:
		return 3;
		break;
	case 3:
		if(esBisiesto==0)
			return 3;
		else
			return 4;
		break;
	case 4:
		if(esBisiesto==0)
			return 6;
		else
			return 0;
		break;
	case 5:
		if(esBisiesto==0)
			return 1;
		else
			return 2;
		break;
	case 6:
		if(esBisiesto==0)
			return 4;
		else
			return 5;
		break;
	case 7:
		if(esBisiesto==0)
			return 6;
		else
			return 0;
		break;
	case 8:
		if(esBisiesto==0)
			return 2;
		else
			return 3;
		break;
	case 9:
		if(esBisiesto==0)
			return 5;
		else
			return 6;
		break;
	case 10:
		if(esBisiesto==0)
			return 0;
		else
			return 1;
		break;
	case 11:
		if(esBisiesto==0)
			return 3;
		else
			return 4;
		break;
	case 12:
		if(esBisiesto==0)
			return 5;
		else
			return 6;
		break;
	default:
		return 0;
	}
}


//Funcion para comprobar si un a�o es bisiesto
void compruebaBisiesto(int anio){	
	if(anio % 400 == 0 || (anio % 4 == 0 && anio % 100 != 0))
		esBisiesto=1;
	else
		esBisiesto=0;
}


//Funcion que devuelve los dias de un mes
int diasMes(int m){

	switch(m){
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