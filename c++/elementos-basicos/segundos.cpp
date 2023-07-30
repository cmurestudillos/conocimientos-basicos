//Dato un numero en segundos lo traduce a minutos y segundos
#include <iostream>

using namespace std;

	int main()
	{

		int horas;
		int minutos;
		int segundos;
		int tiempo;

//--------------------------------------------------------------------------------------------------//
										//Forma inversa

		/*	cout << "introduce un numero en segundos: ";//introducir el dato
			cin >> segundos;//se guarda en la variable

				tiempo = segundos;//calcular el dato

			cout << "introduce un numero en minutos: ";//introducir el dato
				cin >> minutos;//se guarda en la variable

				tiempo = minutos * 60;//calcular el dato

			cout << "introduce un numero en horas: ";//introducir el dato
				cin >> horas;//se guarda en la variable


				tiempo = horas * 3600; //calcular el dato

				cout << "\n\n";

			cout << "Total " << + tiempo << "segundos" ;*/

//--------------------------------------------------------------------------------------------------//
										//Forma alternativa

		/*minutos = tiempo /60;
		segundos = tiempo %60;
		horas = minutos / 60;
		minutos = % 60;*/
//--------------------------------------------------------------------------------------------------//

			cout << "introduce un numero en segundos: ";//introducir el dato
			cin >> tiempo;//se guarda en la variable

				horas = tiempo/3600;
				minutos = tiempo%3600/60;
				segundos = tiempo%3600%60;

			cout << "\n" << horas << "horas/s" << minutos << "minutos/s y" << segundos << "segundos";


			cout << "\n\n\n";

	}