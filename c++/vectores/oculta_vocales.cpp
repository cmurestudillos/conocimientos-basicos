//Palabra sin vocales
#include <iostream>

using namespace std;
#define TAM 90

void mostrar (char[], char[]);
void cuentaletras (char[]);

int main(){

	char palabra[TAM], ocultas[6]="aeiou";

	cout << "Escribe la palabra: ";
	cin >> palabra;

	cuentaletras(palabra);
	
	cout << "\nPalabra sin vocales: ";
	mostrar(palabra, ocultas);

	cout << "\nEscribe las 5 letras que quieres ocultar: ";
	cin >> ocultas;

	mostrar(palabra, ocultas);
}


void cuentaletras (char pal[TAM])
{
	int i=0;

	do
	{
		i++;
	}while(pal[i] != '\0');

	cout << "\n\"" << pal <<"\" tiene " << i << " caracteres\n";


}


//Oculta las letras 
void mostrar(char pal[TAM], char le[6]){
	int i,j;
	i=0;
	while(pal[i] != '\0' && i < TAM){
		j=0;
		while(j<5 && pal[i]!=le[j]){
			j++;
		}
		if(j==5)
			cout << pal[i];
		else
			cout << "-";
		i++;
	}
	
	cout << "\n\n\n";


}
