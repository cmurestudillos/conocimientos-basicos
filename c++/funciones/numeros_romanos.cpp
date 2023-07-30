//Conversor a numeros romanos
#include <iostream>
#include "stdlib.h"

using namespace std;

void romanos (int);

int main(){
	int num;
	char resp='s';

	do{
		cout << "Introduce el numero que quieres convertir: ";
		cin >> num;
		while(num<1 || num>3999){		
			cout << "\nEl numero maximo es 3999. \nIntroduce otro numero: ";
			cin >> num;		
		}

		romanos(num);

		cout << "Desea hallar otro numero?(s/n): ";
		cin >> resp;

	}while(resp=='s');

	cout << "\n\n\n";
}


void romanos(int n){
    int unidades, decenas, centenas, millares, aux;    
    
    unidades = n % 10;

    aux = n / 10;
    decenas = aux % 10;

    aux = aux / 10;
    centenas = aux % 10;

    aux = aux / 10;
    millares = aux;
    
     
	cout << "\n";

    switch (millares){
        case 1:
            cout << "M";
			break;
		case 2:
            cout << "MM";
			break;
		case 3:
            cout << "MMM";
			break;
    }
    
    switch(centenas){
        case 1:
            cout << "C";
			break;
		case 2:
            cout << "CC";
			break;
		case 3:
            cout << "CCC";
			break;
        case 4:
            cout << "CD";
			break;
        case 5:
            cout << "D";
			break;
        case 6:
            cout << "DC";
			break;
        case 7:
            cout << "DCC";
			break;
        case 8:
            cout << "DCCC";
			break;
        case 9:
            cout << "CM";
			break;
    }
    
    switch(decenas){
		case 1:
            cout << "X";
			break;
		case 2:
            cout << "XX";
			break;
		case 3:
            cout << "XXX";
			break;
		case 4:
            cout << "XL";
			break;
		case 5:
            cout << "L";
			break;
		case 6:
            cout << "LX";
			break;
		case 7:
            cout << "LXX";
			break;
		case 8:
            cout << "LXXX";
			break;
		case 9:
            cout << "XC";
			break;
    }
    
    switch (unidades){
		case 1:
            cout << "I";
			break;
        case 2:
            cout << "II";
			break;
        case 3:
            cout << "III";
			break;
        case 4:
            cout << "IV";
			break;
        case 5:
            cout << "V";
			break;
        case 6:
            cout << "VI";
			break;
        case 7:
            cout << "VII";
			break;
        case 8:
            cout << "VIII";
			break;
        case 9:
            cout << "IX";
			break;
    }
	
	cout << endl;
	system("pause>null");
	system("cls");
}





