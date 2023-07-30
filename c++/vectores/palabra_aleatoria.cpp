//Palabras aleatorias
#include <iostream>
#include "string.h"
#include "stdlib.h"
#include "time.h"

using namespace std;
void mostrar (int, char[][25]);

int main(){

	char palabras[5][25]={"springfield","acondicionado","olimpicos","teo_en_la_granja","bachillerato"};
	int n;

	srand(time(NULL));

	n=rand()%5;

	cout << "La palabra numero " << n+1 << " es: ";
	mostrar(n,palabras);

	cout << "\n\n\n";
}

void mostrar(int n, char m[5][25]){

	//int i=0;
	//char pal[25];

	cout << m[n];

	
	/*strcpy(pal, m[n]);
	while(pal[i] != '\0' && i<25){
		cout << pal[i];
		i++;
	}*/
	
}