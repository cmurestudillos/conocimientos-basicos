//Dar un numero en segundos, lo traduce a minutos y segundos
#include <iostream>
using namespace std;

int main(){
	int num, min, seg, horas;

	cout << "Introduce un numero en segundos: ";
	cin >> num;

	horas = num/3600;
	min = num%3600 /60;
	seg = num%3600 %60;

	cout << horas;

	if(horas != 1)
		cout << " horas, ";
	if(horas == 1)
		cout << " hora, ";

	cout << min;

	if(min != 1)
		cout << " minutos, ";
	if(min == 1)
		cout << " minuto, ";

	cout << seg;

	if(seg != 1)
		cout << " segundos. ";
	if(seg == 1)
		cout << " segundo. ";

	cout << "\n\n\n";
}