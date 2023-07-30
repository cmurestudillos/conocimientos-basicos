//Calificaciones-Notas.
#include <iostream>
#include "stdlib.h"
#include "time.h"

using namespace std;
#define TAM 15

//Prototipos de funcion.
void calificacion(int);

int main()
{

	int v[TAM]; 
	int	i; 
	int	max; 
	int	min; 
	int	media; 
	int	suma=0; 
	int	contador_superior=0; 
	int	contador_inferior=0; 
	int	contador_aprobados=0; 
	int	porcentaje;
	
	srand(time(NULL));

    cout << "\n";
	cout << "\t\t- NOTAS DE LA CLASE -\n";
    cout << "\t\t---------------------\n\n";

			for(i=0;i<TAM;i++)
				{
				v[i]=rand()%11;

				if (i==0)
					{
					max = v[i];
					min = v[i];
					}

				if(v[i] > max)
					{
					max = v[i];
					}
		
				if(v[i] < min)
					{
					min = v[i];
					}
		
				suma = suma + v[i];
				}

	media = suma / TAM;

			for(i=0;i<TAM;i++)
				{
				cout << "Alumno ";//N� Alumno.
				if (i+1 < 10)
				cout << " ";
				cout << i+1 << " -> ";

				if(v[i] != 10)//Calificacion.
				cout << " ";
				cout << v[i] << " -> ";
				calificacion(v[i]);
				cout << "\n";

				if (v[i] > media)//Nota superior a la media.
					{
				contador_superior ++;
					}
				if (v[i] < media)//Nota inferior a la media.
					{
				contador_inferior ++;
					}
				if (v[i] > 4)//Aprobados
					{
			contador_aprobados ++;
				}
	}
	
	porcentaje = contador_aprobados * 100 / TAM;//Porcentaje de aprobados.(%).
	
	cout << "\nLa nota maxima es " << max << " y la ha sacado el alumno " << v[max] << ".";
	cout << "\nLa nota minima es  " << min << " y la ha sacado el alumno " << v[min] << ".";
	cout << "\nLa nota media es " << media << ".";
	
	cout << "\n\nHay " << contador_superior << " notas superiores a la media.";
	cout << "\n\nHay " << contador_inferior << " notas inferiores a la media."; 	
	cout << "\n\nHa aprobado el " << porcentaje << "% de la clase.";

	cout << "\n\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                                Fin del Programa.                                "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n\n";
}
//Definiciones de funcion.
//--------------------------Calificacion---------------------------//
void calificacion(int n)
{
				switch (n)
						{
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
//--------------------------Funcion---------------------------//
