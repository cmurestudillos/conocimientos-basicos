/* persona.java
 * Creado el 13 de marzo de 2008, 12:08
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor. */

/*** @author Calos Mur ***/

import java.util.Scanner;
public class persona 
{
    public static void main(String[] args)
    {
        persona miPersona = new persona();
	Scanner teclado;
	
	teclado=new Scanner(System.in);

	System.out.println("Introduce un Nombre: ");
	String nom=teclado.nextLine();

	System.out.println("Introduce la Edad: ");
	int edad=teclado.nextInt();

        miPersona.mostrarDatos();
        
    }
    private String nombre;
    private int edad;
    
//----------------------Constructor.-----------------------//
    public persona() 
    {
        nombre="-";
        edad=0;
    }
    
    public persona(String mNombre, int mEdad) 
    {
        setNombre(mNombre);
	setEdad(mEdad);
    }
    
//--------------------Lectura y Escritura.------------------//
	public String getNombre()
        {
            return nombre;
        };
	public int getEdad()
        {
            return edad;
        };
	public void setNombre(String mNombre)
        {
            nombre=mNombre;
        };
    /** Metodo para establecer el valor del miembro edad. * @param mEdad Valor que queremos asignarle a la Edad. ***/
	public void setEdad(int mEdad)
        {
            if(mEdad>0)
            {
            edad=mEdad;
            }
        };
        public void mostrarDatos()
        {
            System.out.println("Nombre :"+getNombre());
            System.out.println("Edad :"+getEdad());
        };
    
}
