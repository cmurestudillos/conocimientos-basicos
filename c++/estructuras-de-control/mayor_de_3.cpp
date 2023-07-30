// Mayor de tres numeros
#include <iostream>
using namespace std;

int main(){
	
	int num1, num2, num3;

	cout << "Numero 1: ";
	cin >> num1;
	cout << "Numero 2: ";
	cin >> num2;
	cout << "Numero 3: ";
	cin >> num3;
	
	//Con condiciones simples	
	if(num1 > num2){
		if(num1 > num3){
			cout << "\nEl mayor es el numero 1: " << num1;
		}
		else{
			cout << "\nEl mayor es el numero 3: " << num3;
		}
	}
	else{
		if(num2 > num3){
			cout << "\nEl mayor es el numero 2: " << num2;
		}
		else{
			cout << "\nEl mayor es el numero 3: " << num3;
		}
	}

	/*Con condiciones compuestas

	if(num1 > num2 && num1 > num3){
		cout << "\nEl numero 1 es el mayor: " << num1;
	}
	if(num2 > num1 && num2 > num3){
		cout << "\nEl numero 2 es el mayor: " << num2;
	}
	if(num3 > num1 && num3 > num2){
		cout << "\nEl numero 3 es el mayor: " << num3;
	}
	*/
	

	/* Otra forma mas
	if(num1 > num2 && num1 > num3){
		cout << "\nEl numero 1 es el mayor: " << num1;
	}
	else{
		if(num2 > num3){
			cout << "\nEl numero 2 es el mayor: " << num2;
		}
		else{
			cout << "\nEl numero 3 es el mayor: " << num3;
		}
	}
	*/

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";
}