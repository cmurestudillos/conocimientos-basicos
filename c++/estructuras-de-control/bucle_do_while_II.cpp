//Ejemplo de Password bucle Do-While.
#include <iostream>
using namespace std;

int main()
{
	int num;
	int i=0;
	int password=123;

			cout << "Introduzca el password: ";
			cin >> num;
			i++;

	do
		{
		if(num!=password)
			{
				cout << "\n-- Password Incorrecto --";
				cout << "\n\n";
				cout << "\nVuelva a intentarlo: ";
				cin >> num;
				i++;
			}

		}
	while(num != password && i<3);

		if(num==password)
			cout << "\n\n-- Password Correcto. Acceso concedido --";
		else
			cout<<"\n\n-- Ha introducido un codigo erroneo tres veces. Acceso dengado --";
	
	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                        \1\1\1  Fin del Programa.  \1\1\1                        "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";
}