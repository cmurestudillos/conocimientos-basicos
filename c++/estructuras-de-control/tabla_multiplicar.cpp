//Tabla de Multiplicar.Bucle For.
#include<iostream>
using namespace std;

int main()
{
	int i;
	int num;
	int operacion;

	cout << "Escribe la tabla de multiplicar que quieres ver: ";
	cin >> num;

	cout << "\nTabla del " << num;
	cout << "\n===========" ;

	for(i=1; i<=10; i++)
		{
		operacion=num*i;
		cout << "\n";
		cout << num << " X " << i << " = " << operacion;
		}

	/*cout << "\n";
	cout << "\nTabla del " << num << " a la inversa ";
	cout << "\n===========" ;

	for(i=10; i>=1; i--)
		{
		operacion=num*i;
		cout << "\n";
		cout << num << " X " << i << " = " << operacion;
		}*/

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                        \1\1\1  Fin del Programa.  \1\1\1                        "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";

}