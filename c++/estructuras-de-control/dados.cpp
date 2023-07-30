// Tirada de dados
#include <iostream>
#include "stdlib.h"
#include "time.h"
using namespace std;

int main(){

	int d1,d2, suma;
	char resp;

	srand(time(NULL));

	do{
		cout << "\t\t-: TIRADA DE DADOS :- \n\n";

		d1=1+rand()%6;
		d2=1+rand()%6;
		suma = d1+d2;
		
		cout << "\n\t\t      Dado 1: " << d1;
		cout << "\n\t\t      Dado 2: " << d2;
		cout << "\n\n\t\t    La suma es: " << suma;

		cout << "\n\n\nVolver a tirar?(s/n): ";
		cin >> resp;

		system("cls");
	}while(resp == 's');


	cout << "\n\n\n";
}