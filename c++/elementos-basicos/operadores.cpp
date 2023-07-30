//Trabajando con operadores Logicos
#include <iostream>

using namespace std;

	int main()
	{
		int a;
		int b;

			cout << "Dame el valor para A: "; 
			cin >> a;

			cout << "Dame el valor para B: "; 
			cin >> b;


			cout << "\n\nA > B ==> " << (a>b);
			cout << "\nA <= B ==> " << (a<=b);
			cout << "\nA = B ==> " << (a==b);
			cout << "\nA != B ==> " << (a!=b);

			cout << "\nA > 10 * B ==> " << (a>10*b);


			cout << "\n\n\n";
	}