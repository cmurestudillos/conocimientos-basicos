//Menu Funciones.
#include <iostream>
#include "stdlib.h"
#include "time.h"
#include "math.h"

using namespace std;

//Prototipos de funcion.
int menu();
void conversorTemperatura();
void operacionesAleatorias();
void caraYcruz();
void Fibonacci();
void distanciaCoordenadas();
void calculoResto();

int main()
{ 

	int opcion;
	double temp;
	double res;
	int i;
	int n;
	int operacion;


//--------------------------Menu Principal---------------------------//
	do	
	{
		opcion=menu();
		switch(opcion)
			{
	case 0:
		break;
	case 1:
		conversorTemperatura();
		break;
	case 2:
		operacionesAleatorias();
		break;
	case 3:
		caraYcruz();
		break;
	case 4:
		Fibonacci();
		break;
	case 5:
		distanciaCoordenadas();
		break;
	case 6:
		calculoResto();
		break;
		}
	}while(opcion!=0);

	cout << "\n\n";
	cout << "\n================================================================================ "    ;
	cout << "\n                              \1\1\1  End Program.  \1\1\1                       "    ;
	cout << "\n================================================================================ "    ;
	cout << "\n\n";
}

//Definiciones de funcion.
//--------------------------Funcion Menu Principal---------------------------//
int menu()
		{
		int opcion;

	do
		{
	system("cls");
	cout << "\n\n";
	cout << "\t\t - MENU PRINCIPAL - \n\n";
	cout << "\t\t1.- Conversor de Temperaturas - \n";
	cout << "\t\t2.- Operacion Aleatorias      - \n";
	cout << "\t\t3.- Cara o Cruz               - \n";
	cout << "\t\t4.- Serie de Fibonacci        - \n";
	cout << "\t\t5.- Distacia entre dos puntos - \n";
	cout << "\t\t6.- Calcular el resto         - \n";
	cout << "\n\n";
	cout << "\t\t0.- Salir- \n\n";

	cout << "\t\tOpcion: ";
	cin >> opcion;
	cout << "\n";

	if(opcion<0 || opcion >6)
		{
	cout << "Opcion incorrecta "<< endl;
	system("pause>null");				
	system("cls");
		}

		}while(opcion<0 || opcion >6);

				return opcion;
		}
			
//--------------------------Menu Conversor---------------------------//
void conversorTemperatura()
					{
							int opc;
							double temp;
							double res;

							system("cls");
							cout << "\n\n";
							cout << "\t\t - Conversor de Temperaturas - \n\n";
							cout << "\t\t1.- Celsius => Kelvin - \n";
							cout << "\t\t2.- Kelvin => Celsius - \n";
							cout << "\t\t3.- Celsius => Farenheit - \n";
							cout << "\t\t4.- Farenheit => Celsius - \n";
							cout << "\n\n";
	
							cout << "\t\tOpcion: ";
							cin >> opc;
							cout << "\n";
							cout << "\t\tTemperatura: ";
							cin >> temp;

					switch(opc)
							{
					case 1:
						res=temp+273;
						break;

					case 2:
						res=temp-273;
						break;

					case 3:
						res=(temp*1.8)+32;
						break;

					case 4:
						res=(temp-32)/1.8;
						break;
							}
					cout << "\t\tResultado: " << res << endl;;
						system("pause>null");				
						system("cls");
				}
//--------------------------Operaciones Aleatorias---------------------------//
void operacionesAleatorias()
{
							int respuesta;
							int	n; 
							int	m; 
							int	operacion; 
							int	sol;
							double resul;

						do
							{
							n=1+rand()%101;
							m=1+rand()%101;
							operacion=1+rand()%4;

							system("cls");
							cout << "\n";
						switch (operacion)
								{
						case 1:
								cout << "El resultado de: " << n << " + " << m << " = " << n+m;
							break;
						case 2:
								cout << "El resultado de: " << n << " - " << m << " = " << n-m;
							break;
						case 3:
								cout << "El resultado de: " << n << " X " << m << " = " << n*m;
							break;
						case 4:
								cout << "El resultado de: " << n << " / " << m << " = " << n/m;
							break;
								}
		
				cout << "\n";
				cout << "Desea continuar? [Si: 1, No: 0]: ";
				cin >> respuesta;
						}while(respuesta == 1);
}
//--------------------------Cara y Cruz-----------------------------------//
void caraYcruz()
			{
			int	n; 
			int	apuesta; 
			int	balance=100; 
			char respuesta;
			int resp;

				srand(time(NULL));

			do
				{
				system("cls");
				cout << " Balance: " << balance << " \n\n";
				cout << "\n";

				cout << "Elige cara<1> o cruz<0>: ";
				cin >> resp;

				cout << "Cuanto apuestas? ";
				cin >> apuesta;

				n=rand()%2;

				cout << endl;
				cout << "...La moneda esta en el aire... ";
				system("pause>null");
				cout << endl;
				system("pause>null");

					if(n==1)
						{
						balance = balance + apuesta*2;
						cout << "\n";
						cout << "Ganas la Apuesta. ";
						}
					else
						{
						balance -= apuesta;
						cout << "\n";
						cout << "Pierdes la Apuesta. ";
						}				

					if(balance>0)
						{
						cout << "\n";
						cout << "Quieres seguir apostando?(s/n): ";
						cin >> respuesta;
						}
					else
						{
						cout << "Se ha quedado sin saldo. ";
						cout << "\n";
						cout << "Vuelve cuando tengas Dinero. ";
						}				
					cout << endl;	
					system("pause>null");				
						system("cls");
					}while(balance>0 && respuesta=='s');
		
			}
//--------------------------Fibonacci-----------------------------------//
void Fibonacci()
			{
			int num;
			int calculo;
			int i=0;
			int x=0;
			int y=1;

			system("cls");

				cout << "Cuantos numeros quieres ver? ";
				cin >> num;

				cout << "\n";
				cout << "El resultado de la serie es :" << x << " - " << y;

			for(i=3; i<=num; i++)
				{
				calculo=x+y;
				cout << " - " << calculo;
				x=y;
				y=calculo;
				}
				cout << endl;
				system("pause>null");
				system("cls");
			}
//--------------------------Distancia entre dos Puntos-----------------------------------//
void distanciaCoordenadas()
						{
						int x1;
						int x2;
						int y1;
						int y2;
						double lado1;
						double lado2;
						double hipotenusa;

				system("cls");

				cout << "Introduce la coordenada para x1: ";
				cin >> x1;
				cout << "Introduce la coordenada para x2: ";
				cin >> x2;
				cout << "Introduce la coordenada para y1: ";
				cin >> y1;
				cout << "Introduce la coordenada para y2: ";
				cin >> y2;

						lado1=y1-y2;
						lado2=x1-x2;
						hipotenusa=sqrt(lado1*lado1 + lado2*lado2);

						if(hipotenusa < 0)
							hipotenusa=hipotenusa * (-1);

						cout << "La distancia entre los dos puntos: " << hipotenusa;

						cout << endl;
						system("pause>null");
						system("cls");
						}
//--------------------------Calcular el resto-----------------------------------//
void calculoResto()
				{
						int dividendo;
						int divisor;
						int cociente;
						int resto;
						char respuesta;

			do{
						system("cls");

				cout << "Introduce el primer numero: ";
				cin >> dividendo;
				cout << "Introduce el segundo numero: ";
				cin >> divisor;


				//dividendo=divisor*cociente+resto;//D=d*c+r.
				resto=dividendo - (divisor*cociente);//r=D-(d*c).

				cout << "El resto es: " << resto;
				cout << "\n";

				cout << "Otra operacion?(s/n): ";

						cout << endl;
						system("pause>null");
						system("cls");

			}while(respuesta == 's');
				}