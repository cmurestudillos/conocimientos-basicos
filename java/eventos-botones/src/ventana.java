import java.applet.Applet;
import java.awt.*;
import java.awt.event.*;
import java.lang.*;
/*** ventana.java - Created on 17 de marzo de 2008, 9:49 ***/
/*** @author Carlos Mur ***/
public class ventana extends Applet
{
    Color c;   
    Font fNormal;
    Label etiqueta;
    Button boton1;
    Button boton2;
    Button boton3;
    Button botonReset;
    Panel mPanel2;//Creamos el objeto mPanel.
    
    /*** Funcion Init.En ella Creamos los componentes de los Applets. ***/
    /*** Creamos etiquietas, botones con sus respectivas propiedades. ***/
    public void init()
    {
       Color c=new Color(0);
       Font fNormal=new Font("Comic Sans",Font.BOLD,18); 

       //Componentes de los Applets.
       setLayout(new BorderLayout());

       //Creamos un nuevo panel para el boton.
       mPanel2=new Panel();
       mPanel2.setLayout(new GridLayout(8,1));
       
       //------------boton 1--------------//
       boton1=new Button("Boton 1");
       boton1.setBackground(c.ORANGE);
       mPanel2.add(boton1);
       add(mPanel2,BorderLayout.WEST);
       
       //------------boton 2--------------//
       boton2=new Button("Boton 2");
       boton2.setBackground(c.ORANGE);
       mPanel2.add(boton2);
       add(mPanel2,BorderLayout.CENTER);
       
       //------------boton 3--------------//
       boton3=new Button("Boton 3");
       boton3.setBackground(c.ORANGE);
       mPanel2.add(boton3);
       add(mPanel2,BorderLayout.CENTER);
       
       //------------boton reset--------------//
       botonReset=new Button("Reset");
       botonReset.setBackground(c.GREEN);
       mPanel2.add(botonReset);
       add(mPanel2,BorderLayout.WEST);
           
       //------------Etiqueta--------------//
       etiqueta=new Label("Esta es La etiqueta.");
       etiqueta.setBackground(c.LIGHT_GRAY);
       etiqueta.setAlignment(etiqueta.CENTER);
       
       add(etiqueta,BorderLayout.CENTER);
       
    //Nueva declaracion e inicializacion del objeto.
    oyenteAccion mOyente=new oyenteAccion();
    boton1.addActionListener(mOyente);
    boton2.addActionListener(mOyente);
    boton3.addActionListener(mOyente);
    botonReset.addActionListener(mOyente);
    }
    
    /*** Funcion Paint.Dibujar un Titulo y un Rectangulo. ***/
    /*** @param g Funcion Paint. ***/
    public void paint(Graphics g)
    {
    }
    
    /** Crear una nueva instancia de ventana./Constructor */
    public ventana() 
    {
    }
        class oyenteAccion implements ActionListener
        {
    public void actionPerformed(ActionEvent e) 
    {
        etiqueta.setText(" " +e.getActionCommand());
        botonReset.setActionCommand(" Esta es La etiqueta. ");
    }
        }
    
}
