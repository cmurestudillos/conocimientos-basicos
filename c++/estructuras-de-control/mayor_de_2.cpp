// Mayor de dos numeros
#include <iostream>
using namespace std;

int main(){
	
	int num1, num2;

	cout << "Numero 1: ";
	cin >> num1;
	cout << "Numero 2: ";
	cin >> num2;


	if(num1 > num2){	
		cout << "\nEl mayor es el numero 1: " << num1;
	}
	else{ //(num1 <= num2)
		if(num1 < num2){
			cout << "\nEl mayor es el numero 2: " << num2;
		}
		else{
			cout << "\nLos dos numeros son iguales.";
		}
	}
	cout << "\n\n\n";
}