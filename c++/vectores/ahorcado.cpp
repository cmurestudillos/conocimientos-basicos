//El juego del ahorcado
//@ creado por shogtulakk v1.1
#include <iostream>
#include "stdlib.h"
#include "time.h"
#include "string.h"

using namespace std;
#define TAM 50
int fin=0;
int trazos=-1;
int c_letra=0;

void mostrar (char[], char[]);
int cuentaletras (char[]);
void ahorcado();

int main(){

	char palabras[10][TAM]={"lo_que_el_viento_se_llevo",
							"tomates_verdes_fritos",
							"star_wars_episodio_iii",
							"bailando_con_lobos",
							"buscando_a_nemo",
							"el_penalti_mas_largo_de_la_historia",
							"titanic",
							"el_rey_leon",
							"el_reino_de_los_cielos",
							"la_guerra_de_los_mundos"};
	char palabra[TAM], letra, letras[50];
	int n, i=0, intentos=10;

	srand(time(NULL));
	n=rand()%10;
	strcpy(palabra, palabras[n]);


	do
	{
		cout << "\t\t\tEL AHORCADO\n";
		cout << "\t\t\t-- --------\n\n\n";
		

		mostrar(palabra, letras);
		
		ahorcado();
		if(fin==0)
		{
			if (trazos > 10)
				fin=1;
			else
			{
				cout << "\n\n\t\t      Dame una letra: ";
				cin >> letra;
				letras[c_letra]=letra;
				c_letra++;
				
				cout << endl;
				system("cls");
			}
		}
		

	}while(fin == 0);

	cout << "\n\t\t\tFin del juego";
	if (fin == 1)
		cout << "\n\t\t\tHas sido ahorcado";
	if (fin == 2)
		cout << "\n\t\t\tHas ganado";
	
	cout << "\n\t\t   ";
}


void mostrar(char pal[TAM], char letras[50])
{
	int i,j,cont=0, acierto=0;
	i=0;
	cout <<"\t\t";
	while(pal[i] != '\0')
	{
		j=0;
		while(j<50 && pal[i]!=letras[j])
		{
			j++;
		}
		if(j==50)
			cout << "-";
		else
		{
			cout << pal[i];
			cont++;
			if(pal[i] == letras[c_letra-1])
				acierto++;
		}
		i++;
	}

	if(acierto == 0)
		trazos++;
	
	if(cont == cuentaletras(pal))
		fin=2;	
}


int cuentaletras (char pal[TAM])
{
	int i=0;

	do
	{
		i++;
	}while(pal[i] != '\0');

	return i;

	//cout << "\n\"" << pal <<"\" tiene " << i << " caracteres\n";

}

void ahorcado()
{
	cout << "\n\n\n";
	switch (trazos)
	{
		case 1:
			cout << "\n\n\n\n\n\n\t\t\t___ ____\n";
			break;
		case 2:
			cout << "\t\t\t   \n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t___|____\n";
			break;
		case 3:
			cout << "\t\t\t   _____\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t___|____\n";
			break;
		case 4:
			cout << "\t\t\t   _____\n";
			cout << "\t\t\t   |/\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t___|____\n";
			break;
		case 5:
			cout << "\t\t\t   _____\n";
			cout << "\t\t\t   |/  |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t___|____\n";
			break;
		case 6:
			cout << "\t\t\t   _____\n";
			cout << "\t\t\t   |/  |\n";
			cout << "\t\t\t   |   O\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t___|____\n";
			break;
		case 7:
			cout << "\t\t\t   _____\n";
			cout << "\t\t\t   |/  |\n";
			cout << "\t\t\t   |   O\n";
			cout << "\t\t\t   |   |\n";
			cout << "\t\t\t   |   |\n";
			cout << "\t\t\t   |\n";
			cout << "\t\t\t___|____\n";
			break;
		case 8:
			cout << "\t\t\t   _____\n";
			cout << "\t\t\t   |/  |\n";
			cout << "\t\t\t   |   O\n";
			cout << "\t\t\t   |   |\n";
			cout << "\t\t\t   |   |\n";
			cout << "\t\t\t   |  / \n";
			cout << "\t\t\t___|____\n";
			break;
		case 9:
			cout << "\t\t\t   _____\n";
			cout << "\t\t\t   |/  |\n";
			cout << "\t\t\t   |   O\n";
			cout << "\t\t\t   |   |\n";
			cout << "\t\t\t   |   |\n";
			cout << "\t\t\t   |  / \\\n";
			cout << "\t\t\t___|____\n";
			break;
		case 10:
		cout << "\t\t\t   _____\n";
		cout << "\t\t\t   |/  |\n";
		cout << "\t\t\t   |   O\n";
		cout << "\t\t\t   |  -|\n";
		cout << "\t\t\t   |   |\n";
		cout << "\t\t\t   |  / \\\n";
		cout << "\t\t\t___|____\n";
			break;
		case 11:
			cout << "\t\t\t   _____\n";
			cout << "\t\t\t   |/  |\n";
			cout << "\t\t\t   |   O\n";
			cout << "\t\t\t   |  -|-\n";
			cout << "\t\t\t   |   |\n";
			cout << "\t\t\t   |  / \\\n";
			cout << "\t\t\t___|____\n";
			break;
		default:
			cout << "";
			break;
	}
}
