//Vectores y/o Arrays.
#include <iostream>
#include "stdlib.h"
#include "time.h"
#include "math.h"

using namespace std;

int main()
{
		int v[10];
		int i;

		for(i=0;i<10;i++)
			{
			cout << "Valor para la posicion " << i << ":";
			cin >> v[i];
			}
		
		cout << "\n";
		cout << "El vector quedaria asi: ";

		for(i=0;i<10;i++)
			{
			cout << v[i] << " ";
			}


	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";
}