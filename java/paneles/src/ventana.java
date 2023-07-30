import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
/*** ventana.java -  Created on 18 de marzo de 2008, 9:10 ***/
/*** @author Carlos Mur ***/
public class ventana extends JFrame 
{
    public static void main(String[]args)
    {
        //Creacion de un objeto de la clase Frame como contenedor de todos los demas.
        JFrame mVentana=new JFrame();
        mVentana.setLayout(new BorderLayout());
        
        //Creacion de un objeto conclusion para darle a la aplicacion la propiedad de cierre.
        Conclusion c=new Conclusion();
        mVentana.addWindowListener(c);
        
        //Inclusion de un boton y etiqueta.
        JButton mBoton=new JButton(" Boton ");
        JLabel mEtiqueta=new JLabel(" Etiqueta ");
        
        //Creo un Panel Contenendor.
        JPanel mPanel=new JPanel();
        mPanel.setLayout(new GridLayout(3,2,5,5));
        mPanel.add(mBoton);
        mPanel.add(mEtiqueta);
        
        //Colocamos en la ventana.
        mVentana.add(mPanel,BorderLayout.NORTH);
        
        //Compactar y hacer visible la ventana.
        mVentana.pack();
        mVentana.setVisible(true);
    }
    
    /** Creacion de nuevas instancias de ventana */
    public ventana()
    {
    }
    
   static class Conclusion extends WindowAdapter
    {
       public void windowClosing(WindowEvent e)
       {
           //cierra la aplicacion.
           System.exit(0);
       }
    }
}
