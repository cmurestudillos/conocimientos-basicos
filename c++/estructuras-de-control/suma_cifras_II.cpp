//Sumar las cifras de un numero
#include <iostream>
#include "stdlib.h"
#include "time.h"
#include "math.h"
using namespace std;

int main()
{
	int n=0, i, suma=0, num, aleatorio, digitos, min, max;

	cout << "\nIntroduce el numero de digitos: ";
	cin >> digitos;

	srand(time(NULL));

/*	//Genero aleatoriamente cada cifra del numero por separado
	for(i=1; i<=digitos; i++){ 
		aleatorio = rand()%10;
		
		//El primer numero no puede ser 0
		if(i==1 && aleatorio==0) 
			i--;

		n = n*10+aleatorio;	
	}	*/

	min = pow(10,digitos-1);
	max = 9 * min;
	n= min + rand()% (max-min+1);

	cout << "Numero: " << n;

	do{
		num = n % 10;
		suma = suma + num;
		n = n / 10 ;
	}while (n > 0);
	
	cout << "\n\nLa suma de las "<< digitos <<" cifras es " << suma;

	cout << "\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                              \1\1\1  End Program.  \1\1\1                       "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n";

}
