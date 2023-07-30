//Conversor de moneda (Pesetas-Euros y Euros-Pesetas)
#include <iostream>

using namespace std;
#define euro 166.386 //definir una constante

	int main()
	{
		double pesetas;
		double euros;
		double moneda; 

			cout << "introduce las pesetas: ";//introducir el dato
			cin >> pesetas;//se guarda en la variable

				moneda = pesetas / euro;//calcular el dato

			cout << "\nEn Euros son " << moneda << "euros";//mostrar el dato

			cout << "\n\n";

			cout << "introduce los euros: ";//
			cin >> euros;//

				moneda = euro * euros;//

			cout << "\nEn pesetas son " << moneda << "ptas.";//

			cout << "\n\n\n";
	}