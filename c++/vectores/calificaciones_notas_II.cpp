//Notas de clase
#include <iostream>
#include "stdlib.h"
#include "time.h"

using namespace std;
#define TAM 15

void califica(int);

int main()
{
	int v[TAM], i, max, min, media, suma=0, cont_sup=0, cont_inf=0, cont_apro=0, porcen;
	int al_max, al_min, v_s[TAM], c_s=0, v_i[TAM], c_i=0, v_a[TAM], c_a=0;
	
	srand(time(NULL));

    cout << "- NOTAS DE LA CLASE -\n";
    cout << "---------------------\n\n";

	//Relleno el vector y voy comprobando la maxima y la minima
	for(i=0;i<TAM;i++){
		v[i]=rand()%11;

		if (i==0){
			max = v[i];
			min = v[i];
		}

		if(v[i] > max){
			max = v[i];
			al_max = i+1;
		}
		
		if(v[i] < min){
			min = v[i];
			al_min = i+1;
		}
		
		suma = suma + v[i];
	}

	media = suma / TAM;

	for(i=0;i<TAM;i++)
	{
		//Numero de alumno
		cout << "Alumno ";
		if (i+1 < 10)
			cout << " ";
		cout << i+1 << " -> ";

		//Calificacion
		if(v[i] != 10)
			cout << " ";
		cout << v[i] << " -> ";
		califica(v[i]);
		cout << "\n";

		//Compruebo si esta por encima de la media
		if (v[i] > media){
			cont_sup ++;
			v_s[c_s]=i+1;
			c_s ++;
		}
		//Compruebo si esta por debajo de la media
		if (v[i] < media){
			cont_inf ++;
			v_i[c_i]=i+1;
			c_i ++;
		}
		//Compruebo si ha aprobado
		if (v[i] > 4){
			cont_apro ++;
			v_a[c_a]=i+1;
			c_a ++;
		}
	}
	
	porcen = cont_apro * 100 / TAM;
	
	cout << "\nLa nota maxima es " << max << " y la ha sacado el alumno " << al_max;
	cout << "\nLa nota minima es  " << min << " y la ha sacado el alumno " << al_min;
	cout << "\nLa nota media es " << media;
	
	cout << "\n\nHay " << cont_sup << " notas superiores a la media";
	cout << "\nAlumnos por encima de la media: ";
	for(i=0;i<c_s;i++)
		cout << v_s[i] << " ";
	
	cout << "\n\nHay " << cont_inf << " notas inferiores a la media";
	cout << "\nAlumnos por debajo de la media: ";
	for(i=0;i<c_i;i++)
		cout << v_i[i] << " ";
	
	cout << "\n\nHa aprobado el " << porcen << "% de la clase";
	cout << "\nAlumnos aprobados: ";
	for(i=0;i<c_a;i++)
		cout << v_a[i] << " ";



	cout << "\n\n\n";
}

//Funcion que establece la nota en letras
void califica (int n){
	switch (n){
		case 0:
		case 1:
		case 2:
		case 3:
			cout << "Muy deficiente";
			break;

		case 4:
			cout << "Insuficiente";
			break;
		case 5:
		case 6:
			cout << "Suficiente";
			break;
		case 7:
		case 8:
			cout << "Notable";
			break;
		case 9:
		case 10:
			cout << "Sobresaliente";
			break;
	}
}
