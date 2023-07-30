//Palabra al reves
#include <iostream>

using namespace std;
#define TAM 50

void invertir(char[]);

int main(){
	char palabra[TAM];

	cout << "Escribe la palabra (50 caracteres max.): ";
	cin >> palabra;

	invertir(palabra);
	
	cout << "\n\n\n";
}

void invertir (char p[TAM]){
	char w[TAM];
	int i, j, k=0, longitud, esPalindromo=1;
	
	j=0;
	//relleno el vector w al rev�s
	for(i=TAM; i>=0; i--){
		if(k == 1){
			w[j]=p[i];
			j++;
		}
		if(p[i] == '\0'){ //k vale 1 cuando encuentra \0
			k=1;
			w[i]='\0';
			longitud=i;
		}
	}

	
	cout << "\n";	
	cout << "Al reves: ";

	j=0;
	//muestro el vector w (palabra al reves)
	do{
		cout << w[j];		
		j++;
	}while(w[j] != '\0');

	cout << "\nLa palabra tiene " << longitud << " caracteres.";
	
	
	//comparo los dos vectores
	for(i=0;i<=longitud;i++){ 	
		if(p[i] != w[i]) 
			esPalindromo=0;
	}

	if(esPalindromo==0)
		cout << "\n\nLa palabra no es un palindromo";
	else
		cout << "\n\nLa palabra es un palindromo";
	
}
