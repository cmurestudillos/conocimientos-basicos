//Ejercicio de bucle Do-While
#include <iostream>
using namespace std;

int main(){
	int num;
	int i;
	long fac;

	cout << "Introduce un numero: ";
	cin >> num;

	fac = num;
	i= num-1;

		do
			{
				fac=fac*i;
				i--;
			}
		while(i>1);

	cout << "\n\n";
	cout << "El factorial de " << num << " es: " << fac;

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                        \1\1\1  Fin del Programa.  \1\1\1                        "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

}