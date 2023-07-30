import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.event.MouseEvent;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import javax.swing.BorderFactory;
import javax.swing.Box;
import javax.swing.BoxLayout;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JColorChooser;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.border.EmptyBorder;
import javax.swing.event.MouseInputAdapter;
/*
 * ventana.java
 *
 * Created on 5 de mayo de 2008, 12:05
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
    JLabel mFirma,mCabecera,mTitulo,mEtiqueta;
    JPanel panelPie,panelEncabezado,panelMenu;
    JButton mBotonFondo,mBotonTexto;
    ImageIcon imMas2,imMas3;
    /** Creates a new instance of ventana */
    public ventana()
    {
        Font fPie=new Font("Verdana",Font.BOLD,8);
        Font fNormal=new Font("Verdana",Font.BOLD,10);
        Font fTitulo=new Font("Verdana",Font.BOLD,20);
 
        //Configuracion del Boton de Texto
        ImageIcon imMas2=new ImageIcon(getClass().getResource("/texto.png"));
        mBotonTexto=new JButton("Texto",imMas2);
        //Configuracion del Boton de fondo
        ImageIcon imMas3=new ImageIcon(getClass().getResource("/fondo.png"));
        mBotonFondo=new JButton("Fondo",imMas3);
        
        //Oyentes de eventos de Raton.
        EventosRaton EV=new EventosRaton();
        mBotonTexto.addMouseListener(EV);
        mBotonFondo.addMouseListener(EV);
                
        //Creacion y configuracion etiquetas.
        mFirma=new JLabel(" Aplicacion desarrollada en Java ");
        mFirma.setFont(fPie);
        mFirma.setOpaque(true);
        mFirma.setForeground(Color.RED);
        mTitulo=new JLabel(" Selector de Colores ");
        mTitulo.setFont(fTitulo);
        mTitulo.setOpaque(true);
        mTitulo.setForeground(Color.BLACK);
        
        //Creacion y Configuracion del TextPane 
        mEtiqueta=new JLabel(" Texto de Ejemplo para Practicar ");
        mEtiqueta.setFont(fNormal);
        mEtiqueta.setOpaque(true);
        mEtiqueta.setForeground(Color.BLACK);
        mEtiqueta.setBorder(BorderFactory.createTitledBorder(" Etiqueta "));

        //Panel para el Boton.
        JPanel pBoton=new JPanel();
        pBoton.setLayout(new FlowLayout());
        pBoton.add(mBotonTexto);
        pBoton.add(mBotonFondo);
        
        //Paneles de Informacion.
        panelEncabezado=new JPanel();
        panelEncabezado.setLayout(new FlowLayout(FlowLayout.CENTER));
        panelEncabezado.setOpaque(true);
        panelEncabezado.add(mTitulo);
        panelPie=new JPanel();
        panelPie.setLayout(new FlowLayout(FlowLayout.RIGHT));
        panelPie.setOpaque(true);
        panelPie.add(mFirma);
        panelMenu=new JPanel();
        panelMenu.setLayout(new GridLayout(3,1));
        panelMenu.add(mEtiqueta);
        panelMenu.add(Box.createVerticalStrut(5));
        panelMenu.add(pBoton);
 
        //jframe principal.
        add(panelEncabezado,BorderLayout.NORTH);
        add(panelMenu,BorderLayout.CENTER);
        add(panelPie,BorderLayout.SOUTH);
        
        //Hacer visible la interfaz grafica del JFrame(Hacer visible la ventana). 
        setSize(400,300);
        setLocation(150,150);
        setTitle(" Aplicaicion Swing ");
        setVisible(true);
        
       //asignacion de oyentes a los objetos.
        kill KillClosing=new kill();
        addWindowListener(KillClosing); 
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
       /** Creacion de un boton para cerrar la aplicacion */
       public void mouseClicked(MouseEvent e)
       {
        Color mColor=JColorChooser.showDialog(null,"Selector de colores",Color.BLACK);
        JButton aux=(JButton)e.getSource();
        String mensaje=mEtiqueta.getText();
        //cierra la aplicacion.
        if(aux.getText()=="Texto")
            {
           mEtiqueta.setForeground(mColor);
            }
        else
            {
            mEtiqueta.setBackground(mColor);
            }  
        }
    }
}
