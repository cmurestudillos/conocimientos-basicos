//Calcular los numeros primos.
#include <iostream>
using namespace std;

int main()
{
	int num;
	int i;//contador.
	int resto;

	cout << "Introduzca un numero: ";
	cin >> num;

	//i=num-1;
	i=2;
	resto = num % i;

	while (i<num && resto != 0)//(i>1 && resto != 0)
		{
		//i--;
		i++;
		resto = num % i;
		}
	
	if(i == num)//(i==1)
		{
		cout<<"\n\n-- Es Numero Primo --";
		}
	else
		{
		cout << "\n\n-- No es Numero Primo --";
		}
	
	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";;
}