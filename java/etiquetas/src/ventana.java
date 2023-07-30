import java.awt.*;
import java.awt.event.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.border.*;
import javax.swing.event.*;
/*
 * ventana.java
 *
 * Created on 22 de abril de 2008, 9:17
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

/**
 *
 * @author Carlos
 */
public class ventana extends JFrame
{
    JLabel mEtiqueta1;
    JLabel mEtiqueta2;
    JLabel mEtiqueta3;
    JLabel mEtiqueta4;
    JLabel mEtiqueta5;
    JTextArea mText;
    JPanel panelInfo,panelInfo2;
    /**
     * Creates a new instance of ventana
     */
    public ventana()
    {
        
        Font fNormal=new Font("Verdana",Font.BOLD,10);
        
        //Configuracion de las Etiquetas.
        mEtiqueta1=new JLabel("Etiqueta 1");
        mEtiqueta1.setForeground(Color.GREEN);
        mEtiqueta2=new JLabel("Etiqueta 2");
        mEtiqueta2.setForeground(Color.GREEN);
        mEtiqueta3=new JLabel("Etiqueta 3");
        mEtiqueta3.setForeground(Color.GREEN);
        mEtiqueta4=new JLabel("Etiqueta 4");
        mEtiqueta4.setForeground(Color.GREEN);
        mEtiqueta5=new JLabel("Etiqueta 5");
        mEtiqueta5.setForeground(Color.GREEN);
        
        //Configuracion del TextArea.
        mText=new JTextArea("");
        mText.setFont(fNormal);
        mText.setLineWrap(true);
        mText.setColumns(26);
        mText.setRows(17);
        mText.setBorder(new EmptyBorder(10,10,10,10));
        mText.setBackground(Color.WHITE);
        mText.setOpaque(true);
        
        //Panel para La Etiqueta.
        JPanel pEtiqueta=new JPanel();
        pEtiqueta.setBackground(Color.BLACK);
        pEtiqueta.setOpaque(true);
        pEtiqueta.setLayout(new GridLayout(10,1));
        pEtiqueta.add(mEtiqueta1);
        pEtiqueta.add(Box.createVerticalStrut(10));
        pEtiqueta.add(mEtiqueta2);
        pEtiqueta.add(Box.createVerticalStrut(10));
        pEtiqueta.add(mEtiqueta3);
        pEtiqueta.add(Box.createVerticalStrut(10));
        pEtiqueta.add(mEtiqueta4);
        pEtiqueta.add(Box.createVerticalStrut(10));
        pEtiqueta.add(mEtiqueta5);
        pEtiqueta.add(Box.createVerticalStrut(10));
        pEtiqueta.setBorder(new EmptyBorder(10,10,10,10));
        
        //Panel de La caja de Texto.
        JPanel pText=new JPanel();
        pText.setLayout(new GridLayout(2,1));
        pText.setBorder(new EmptyBorder(10,10,10,10));
        
        //----------Disponer los elementos en capas----------//
        //Panel de Informacion.
        panelInfo=new JPanel();
        panelInfo.setBackground(Color.BLACK);
        panelInfo.setOpaque(true);
        panelInfo.add(mText);
        panelInfo2=new JPanel();
        panelInfo2.setBackground(Color.BLACK);
        panelInfo2.setOpaque(true);
        panelInfo2.add(pEtiqueta);
        
        //jframe principal.
        add(panelInfo,BorderLayout.EAST);
        add(panelInfo2,BorderLayout.WEST);
        
        //Hacer visible la interfaz grafica del JFrame(Hacer visible la ventana).
        setSize(400,300);
        setLocation(250,250);
        setTitle(" Aplicaicion Swing ");
        setVisible(true);
        
        //asignacion de oyentes a los objetos.
        kill KillClosing=new kill();
        addWindowListener(KillClosing);
        
        //Oyentes de eventos de Raton.
        EventosRaton EV=new EventosRaton();
        mEtiqueta1.addMouseListener(EV);
        mEtiqueta2.addMouseListener(EV);
        mEtiqueta3.addMouseListener(EV);
        mEtiqueta4.addMouseListener(EV);
        mEtiqueta5.addMouseListener(EV);
    }
    
//-------------------------------Clase para matar Procesos(Kill)-----------------------------------//
class kill extends WindowAdapter
    {
       public void windowClosing(WindowEvent e)
       {
        //mensaje de confirmacion o cancelacion de la Aplicaicion.
        int close=JOptionPane.showConfirmDialog(null," ¿Desea cerrar la aplicacion? ","A.F.",0);
           //cierra la aplicacion.
        if(close==0)
            {
           System.exit(0);
            }
       }
    }
   //-------------------------------Clase para oyentes de eventos de Raton-----------------------------------//    
class EventosRaton extends MouseInputAdapter
{   
    /**Imprimir en la caja de texto la etiqueta.*/
       public void mouseEntered(MouseEvent e)
       {
           JLabel mObjeto=(JLabel)e.getSource();
           mObjeto.getText();
           String strMensaje=" Me Estoy moviendo sobre "+mObjeto.getText();
           mText.setText(strMensaje); 
           mObjeto.setForeground(Color.RED);
       }
       /**Presionar la etiqueta y elegir el texto..*/
       public void mousePressed(MouseEvent e)
       {
           JLabel mObjeto=(JLabel)e.getSource();
           mObjeto.getText();
           //Cambiar el texto de la Etiqueta.
           String strMens=JOptionPane.showInputDialog(null,"Introduce el texto que quieres que aparezca:"," Aplicacion Swing ",1);
           mObjeto.setText(strMens);
       }
       /**Cambiar el Color dela etiqueta al pasar.*/
       public void mouseExited(MouseEvent e)
       {
           JLabel mObjeto=(JLabel)e.getSource();
           mObjeto.setForeground(Color.GREEN);
       }
    } 

}
