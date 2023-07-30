//La Quiniela
#include <iostream>
#include "stdlib.h"
#include "time.h"
using namespace std;

int main()
{
	int i, n;
	srand((unsigned)time(NULL));

	cout << "\t\t|-------------------------|\n";
	cout << "\t\t|   LOTERIAS Y APUESTAS   |\n";
	cout << "\t\t|-------------------------|\n";
	cout << "\t\t|       La Quiniela       |\n";
	cout << "\t\t|-------------------------|\n\n\n";

	
	for(i=1; i<=15; i++){
		n = rand()%3;

		cout << "\t\t\n    Partido  ";
		if(i<10)
			cout << " ";
		cout << i << " .... ";


		/*if(n==0)
			cout << "X";
		else
			cout << n;*/

		switch(n)
		{
		case 0:
			cout << "X";
			break;
		case 1:
			cout << "1";
			break;
		case 2:
			cout << "2";
			break;
		
		}
	}

	cout << "\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n 								Fin de Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n";
}







