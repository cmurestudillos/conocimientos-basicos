// Años bisiestos o no bisiestos
#include <iostream>
using namespace std;

int main()
{
	
	int year;

	cout << "Introduce la fecha: ";
	cin >> year;
	
	//No vale if((year%4==0) || ((year%100==0) && (year%400==0)))
	//No vale if((year % 4 && year % 100 && year % 400)==0)

	if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
		{
		cout << "\nEs bisiesto.";
		}
	else
		{
		cout << "\nNo es bisiesto.";
		}

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

	}