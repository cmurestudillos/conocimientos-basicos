//Directivas del preprocesador.
#include <iostream>

using namespace std;

//Declaracion de variables Globales.
#define PI 3.1416
int valor=0;

//Prototipos de funcion.
int sumaDevuelve (int, int);//funcion 1.//Funcion en si,devuelv eun valor.
void sumaNodevuelve (int,int);//funcion 2.//Procedimiento, no devuelve ningun valor.

//Funcion main() o principal.
int main()
{ 
	int n1;
	int n2;
	int suma=0;

	cout << "Introduce el Numero 1: ";
	cin >> n1;

	cout << "Introduce el Numero 2: ";
	cin >> n2;


	sumaNodevuelve(n1,n2);
	suma=sumaDevuelve(n1,n2);
	//cout << "Suma de Funcion 1: " << suma;
	cout << "\n";
	cout << valor;
	//cout << "Fin de la funcion main() ";

	cout << "\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                              \1\1\1  End Program.  \1\1\1                       "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n";
}

//Definiciones de funcion.
//--------------------------funcion 2---------------------------//
void sumaNodevuelve(int a,int b)
					{
					int suma1;

					//cout << "Estamos en la funcion sumaNodevuelve ";

					suma1=a+b;
					cout << "\n";
					cout << "Suma de Funcion 2: " << suma1; 
					cout << "\n";
					//cout << "Fin de la funcion sumaNodevuelve ";
					//cout << "\n";
					}
//--------------------------funcion 1---------------------------//
int sumaDevuelve(int x, int y)
				{
				int suma2;

				//cout << "Estamos en la funcion sumaDevuelve ";

				suma2=x+y;

				//cout << "\n";
				//cout << "Fin de la funcion sumaDevuelve ";
				//cout << "\n";

				return suma2;
				}
