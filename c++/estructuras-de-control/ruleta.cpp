//Ruleta.
#include <iostream>
#include "stdlib.h"
#include "time.h"
using namespace std;

int main()
{ 
	int	n2;
	int	n3; 
	int	apuesta; 
	int	saldo=100; 
	char respuesta;

	/*cout << "\t\t\t|-------------------------|\n";
	cout << "\t\t\t| LA RULETA DE LA FORTUNA |\n";
	cout << "\t\t\t|-------------------------|\n\n\n";*/

	srand(time(NULL));

	//cout << "El saldo inicial es de " << saldo << " euros";

	do
		{	
	system("cls");
	cout << "\t\t\t|-------------------------|\n";
	cout << "\t\t\t| LA RULETA DE LA FORTUNA |\n";
	cout << "\t\t\t|-------------------------|\n\n\n";
	
	cout << " - Saldo: " << saldo << " -\n\n";
	cout << "\n";
	cout << "Cuanto dinero apuestas? ";
	cin >> apuesta;
	cout << "\n";
	cout << "Numero al que apuestas: ";
	cin >> n2;

	n3 = rand()%37;

	cout << endl;
	cout << "...Girando,Girando,Girando... ";
	system("pause>null");
	cout << endl;
	system("pause>null");
			
	cout << "\n";
	cout << "Y sale el Numero...." << "!!! " << n3 << " !!!";

		if(n2==n3)
			{
			saldo = saldo + apuesta*2;
			cout << "\n\n - Gana -";
			}

			//else if(n%2 == num%2)
			//	cout << "\n\n - Numero par/impar. No pierde -";

			else if(n2%2==0 && n3%2==0 && n2!=0)
					{
					cout << "\n\n - Numeros pares. No pierde -";
					}
			else if(n2%2!=0 && n3%2!=0)
					{
					cout << "\n\n - Numeros impares. No pierde -";
					}
			else if(n2==0)
					{
					saldo = saldo - apuesta;
					cout << "\n\n - Gana la banca -";
					}
		else
			{
			saldo -= apuesta;
			cout << "\n\n - Pierde -";
			}


		if(saldo>0)
			{
			cout << "\n\n\nDesea volver a apostar?(s/n): ";
			cin >> respuesta;
			}
		else
			{
			cout << "\n\n\nSe ha quedado sin saldo.";
			cout << "\nAlguien le acompanara a la salida";
			}

		}while(saldo>0 && respuesta=='s');



	cout << "\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                              \1\1\1  End Program.  \1\1\1                       "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n";
}