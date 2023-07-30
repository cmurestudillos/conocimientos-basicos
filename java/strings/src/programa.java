import java.awt.*;
import java.awt.event.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.swing.*;
import javax.swing.border.*;
import java.lang.*;
import javax.swing.event.*;
/*** programa.java - Created on 18 de marzo de 2008, 9:47 ***/
/*** @author Carlos Mur ***/
public class programa extends JFrame
{
    JTextArea mText;
    JButton mBoton1, mBoton2, mBoton3;
    JLabel mEtiqueta;
    JScrollPane srcScroll;
    
    public static void main(String[]args)
    {
        programa aplicacion=new programa();
        aplicacion.setTitle(" Aplicacion de Tratamiento de Cadenas ");
    }
    
    /** Crear una nueva instancia de programa */
    public programa() 
    {          
        //Creacion de un objeto conclusion para darle a la aplicacion la propiedad de cierre.
        Conclusion c=new Conclusion();
        addWindowListener(c);
               
        //Inclusion de un boton, etiqueta,text Area.
        mBoton1=new JButton(" Boton 1 ");
        mBoton2=new JButton(" Boton 2 ");
        mBoton3=new JButton(" Boton 3 ");
        mEtiqueta=new JLabel("---------- GESTION DE CADENAS DE TEXTO ----------");
        //---------------------------------------------------------------------------//
        //Configuracion del TextArea.
        mText=new JTextArea(" Caja de Texto ");

        mText.setLineWrap(true);
        mText.setColumns(20);
        mText.setRows(16); 
              
       //ScrollPane.
        srcScroll=new JScrollPane(mText,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED,JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
          
        //---------------------------------------------------------------------------//
        
        //Creo un Panel Contenendor.
        JPanel mPanel=new JPanel();
        mPanel.setLayout(new GridLayout(10,10,10,10));
        mPanel.setBorder(new EmptyBorder(10,10,10,10));
        
        //Panel para Los Botones.
        JPanel pBoton=new JPanel();
        pBoton.setLayout(new GridLayout(10,1));
        pBoton.add(mBoton1);
        pBoton.add(Box.createVerticalStrut(10));
        pBoton.add(mBoton2);
        pBoton.add(Box.createVerticalStrut(10));
        pBoton.add(mBoton3);
        pBoton.setBorder(new EmptyBorder(15,15,15,15));
        
        //Panel de La caja de Texto.
        JPanel pText=new JPanel();
        pText.setLayout(new GridLayout(1,2));
        pText.add(srcScroll);
        pText.setBorder(new EmptyBorder(10,10,10,10));
        
        //Panel para La Etiqueta.
        JPanel pEtiqueta=new JPanel();
        pEtiqueta.setLayout(new GridLayout(2,2));
        pEtiqueta.add(mEtiqueta);
        pEtiqueta.setBorder(new EmptyBorder(10,10,10,10));
        
        //Contenido a Mostrar en la Ventana.
        add(pEtiqueta,BorderLayout.NORTH);
        add(pBoton,BorderLayout.WEST);
        add(pText,BorderLayout.CENTER);
        
        //Caracteristicas de la Ventana.
        setSize(600,400);
        setVisible(true);
    
       //Crear los Objetos y los Oyentes para las Propiedades del raton,
        ConclusionRaton oyente=new ConclusionRaton();
        //Oyentes de los Botones.
        mBoton1.addMouseListener(oyente);
        mBoton2.addMouseListener(oyente);
        mBoton3.addMouseListener(oyente);
        //Oyente para la caja de texto.
        mText.addMouseListener(oyente);
        //Oyente para la Etiqueta.
        mEtiqueta.addMouseListener(oyente); 
    
    }
 /**Funcion de la fecha/Hora*/   
String capturar_hora()
{
       Date hora=new Date();
       SimpleDateFormat formato=new SimpleDateFormat("HH:mm:ss");
       return formato.format(hora);

}

class Conclusion extends WindowAdapter
    {
       public void windowClosing(WindowEvent e)
       {
           //cierra la aplicacion.
           System.exit(0);
       }
    }

class ConclusionRaton extends MouseInputAdapter
{   
    /**Imprimir en la caja de texto la etiqueta.*/
       public void mouseClicked(MouseEvent e)
       {
           Object objeto=e.getSource();
           String hora=capturar_hora();
           String mensaje="";
           if(objeto instanceof JButton)
           {
               JButton aux=(JButton) objeto;
               mensaje=aux.getText();
           }
               
           else if(objeto instanceof JLabel)
           {
               JLabel aux=(JLabel) objeto;
               mensaje=aux.getText();
           }
               
           else if(objeto instanceof JTextArea)
           {
               JTextArea aux=(JTextArea) objeto;
               mensaje=aux.getText();
           }
           
           String auxCadena=mText.getText();            
           mText.setText(auxCadena + "\n\n"+ "(" + hora +")\n\t Se ha hecho click sobre " + mensaje);
       }   
       
       public void mouseEntered(MouseEvent e){ 
           String hora=capturar_hora();
            Object objeto= e.getSource(); 
            String mensaje="";
            
            if(objeto instanceof JButton){
                JButton aux=(JButton)objeto;
                mensaje=aux.getText();
            }    
            else if(objeto instanceof JLabel){
                JLabel aux=(JLabel)objeto;
                mensaje=aux.getText();                
            }
            else if(objeto instanceof JTextArea){
                JTextArea aux=(JTextArea)objeto;
                mensaje=aux.getText();                
            }

            String auxCadena=mText.getText();            
            mText.setText(auxCadena + "\n\n" + "(" + hora +")\n\t Est�s sobre " + mensaje);
       } 
      public void mouseExited(MouseEvent e){  
          String hora=capturar_hora();
          Object objeto= e.getSource();
            String mensaje="";
            
            if(objeto instanceof JButton){
                JButton aux=(JButton)objeto;
                mensaje=aux.getText();
            }    
            else if(objeto instanceof JLabel){
                JLabel aux=(JLabel)objeto;
                mensaje=aux.getText();                
            }
            else if(objeto instanceof JTextArea){
                JTextArea aux=(JTextArea)objeto;
                mensaje=aux.getText();                
            }

            String auxCadena=mText.getText();            
      }  
}

}
    
