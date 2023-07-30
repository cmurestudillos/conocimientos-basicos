//Estadistica de notas de los alumnos de una clase
#include <iostream>
using namespace std;

int main()
{
	int num, i=0, nota, suma=0, mayor, menor;
	double promedio;

	cout << "Cuantos alumnos hay en la clase? ";
	cin >> num;

	/*cout << "Introduce la nota del alumno 1: ";
	cin >> nota;

	mayor = nota;
	menor = nota;
	suma += nota;
	i++;*/

	while(i < num)
	{
		cout << "Introduce la nota del alumno " << i+1 << ":";
		cin >> nota;
		
		if(i==0)
		{
			mayor=nota;
			menor=nota;
		}

		if (nota > mayor)
			mayor = nota;
		if (nota < menor)
			menor = nota;

		suma += nota;
		i++;
	}
	
	promedio = suma/num;

	cout << "\nAlumnos: " << num;
	cout << "\nNota media: " << promedio;
	cout << "\nSuma notas: " << suma;
	cout << "\nNota maxima: " << mayor;
	cout << "\nNota minima: " << menor;

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";
}
