//Numeros Aleatorios en C++.
#include <iostream>
#include "stdlib.h"
#include "time.h"
using namespace std;

int main()
{
	int n;
	int i;

srand(time(NULL));//Semilla.

	for(i=0;i<10;i++)
		{
		//n=1+rand()%10;			//Aleatorio entre 1-10.
		//n=rand()%10;				//Aleatorio entre 0-9.
		//n=rand();					//Numero aleatorio con varias cifras.
		n=255+rand()%(263-255+1);	//Aleatorio entre 255-263.

		//n=min+rand()%(max-min+1);
		cout << n << "\n";
		}

	cout << "\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                              \1\1\1  End Program.  \1\1\1                       "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n";

}