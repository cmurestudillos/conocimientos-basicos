//Estudio de temperaturas
#include <iostream>
#include "stdlib.h"
#include "time.h"

using namespace std;
#define MES 12
#define ANIO 10

void mediaTotal(int[ANIO][MES]);
void mediaMes(int[]);
void mediaAnio(int[]);
void escribeMes(int);

int main(){
	int temp[ANIO][MES]={0}; //Inicializa toda la matriz a 0
	int auxMes[ANIO], auxAnio[MES];
	int i, j, k, a, m;

	srand(time(NULL));

	cout << "\t\t\tESTUDIO DE TEMPERATURAS\n";
	cout << "\t\t\t-----------------------\n";

	for(i=0;i<ANIO;i++){
		for(j=0;j<MES;j++){
			temp[i][j] = -20+rand()%61;		
		}
	}

	cout << "\n\n    Registro de temperaturas durante los ultimos " << ANIO << " anios\n\n";
	cout << "        \332";
	for(k=0;k<11;k++) cout<<"\304\304\304\304\302";
	cout<<"\304\304\304\304\277\n";
	cout << "        \263  E \263  F \263  M \263  A \263  M \263  J \263  J \263  A \263  S \263  O \263  N \263  D \263\n";

	for(i=0;i<ANIO;i++){
		if(i==0) cout<<"\332";
		else cout<<"\303"; 
		cout << "\304\304\304\304\304\304\304\305";
		for(k=0;k<11;k++) cout<<"\304\304\304\304\305";
		cout<<"\304\304\304\304\264";
		cout << "\n\263Anio ";
		if(i<9) cout<<" ";
		cout << i+1 << "\263";
		for(j=0;j<MES;j++){
			if(temp[i][j]<10 && temp[i][j]>=0) cout<<"  ";
			if(temp[i][j]>=10 || (temp[i][j]<0 && temp[i][j]>-10)) cout<<" ";
			cout << temp[i][j] << " \263";
		}
		cout << "\n";
	}
	cout << "\300\304\304\304\304\304\304\304\301";
	for(k=0;k<11;k++) cout<<"\304\304\304\304\301";
	cout<<"\304\304\304\304\331";

	cout << "\n\n\n";


	cout << "\nQue anio quieres comrobar?: ";
	cin >> a;

	cout << " Que mes quieres comrobar?: ";
	cin >> m;

	mediaTotal(temp);

	//Media del a�o indicado
	for(i=0;i<MES;i++)
		auxAnio[i]=temp[a-1][i];

	cout << "\nMedia del anio " << a << ": ";
	mediaAnio(auxAnio);

	//Media del mes indicado
	for(i=0;i<ANIO;i++)
		auxMes[i]=temp[i][m-1];
	
	cout << "\nMedia de los meses de ";
	escribeMes(m);
	cout << ": ";
	mediaMes(auxMes);


	//cout << "\n\nDiferencia : ";
	//A-B -> si da negativo -> *(-1)


	cout << "\n\n\n\n";	
}

void mediaTotal(int matriz[ANIO][MES]){
	int i, j;
	float suma=0, media;

	for(i=0;i<ANIO;i++)
		for(j=0;j<MES;j++)
			suma+=matriz[i][j];
	media=suma/(ANIO*MES);
	cout << "\nMedia Total: " << media;
}


void mediaMes(int v[ANIO]){
	int i;
	float suma=0, media;

	//for(i=0;i<ANIO;i++)
	//	cout<< v[i] << "  ";
	for(i=0;i<ANIO;i++)
		suma+=v[i];

	media=suma/ANIO;
	cout << media;
}


void mediaAnio(int v[MES]){
	int i;
	float suma=0, media;

	//for(i=0;i<MES;i++)
	//	cout<< v[i] << "  ";
	for(i=0;i<MES;i++)
		suma+=v[i];

	media=suma/MES;
	cout << media;
}


void escribeMes(int m){
	switch(m){
	case 1:
		cout << "enero";
		break;
	case 2:
		cout << "febrero";
		break;
	case 3:
		cout << "marzo";
		break;
	case 4:
		cout << "abril";
		break;
	case 5:
		cout << "mayo";
		break;
	case 6:
		cout << "junio";
		break;
	case 7:
		cout << "julio";
		break;
	case 8:
		cout << "agosto";
		break;
	case 9:
		cout << "septiembre";
		break;
	case 10:
		cout << "octubre";
		break;
	case 11:
		cout << "noviembre";
		break;
	case 12:
		cout << "diciembre";
		break;
	}
}