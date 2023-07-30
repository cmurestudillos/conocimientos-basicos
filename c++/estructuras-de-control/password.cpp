//Password.
#include <iostream>
using namespace std;

int main()
{
	int numero, i=3;
	int password=123;

	cout << "Introduzca el password: ";
	cin >> numero;
	i--;

	while (numero != password && i>0)
	{
		cout << "\n-- Password Incorrecto --";
		cout << "\n\n";
		cout << "\nVuelva a intentarlo: ";
		cin >> numero;
		i--;
	}
	
	if(numero!=password)
		cout<<"\n\n-- Ha introducido un codigo erroneo tres veces. Acceso dengado --";
	else
		cout << "\n\n-- Password Correcto. Acceso concedido --";
	
	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";;
}

/*void main(){
	int numero;

	cout << "\nIntroduzca la contrasenia: ";
	cin >> numero;

	while (numero != clave)
	{
		cout << "\nContrasenia Incorrecta.";
		cout << "\n\nVuelva a intentarlo: ";
		cin >> numero;
	}
		
	cout << "\n\n-- Contrasenia correcta. Acceso concedido --";
	cout << "\n\n\n";
}*/



